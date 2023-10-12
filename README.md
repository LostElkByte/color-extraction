# color-extraction

[![npm](https://img.shields.io/npm/v/color-extraction?color=blue)](https://www.npmjs.com/package/color-extraction)
[![GitHub issues](https://img.shields.io/github/issues/1363944642/color-extraction)](https://github.com/1363944642/color-extraction/issues)
[![npm](https://img.shields.io/npm/dt/color-extraction)](https://www.npmjs.com/package/color-extraction)
![npm package minimized gzipped size (select exports)](https://img.shields.io/bundlejs/size/color-extraction)
[![NPM](https://img.shields.io/npm/l/color-extraction)](http://opensource.org/licenses/MIT)

[English](README.md) · [简体中文](README.ZH.md)

Gets the dominant color or color palette in the image and the color name in English and Chinese.✨

**_Works with browsers and node environments._**

## Getting started

### Using in Node

#### 1.Install and import

```sh
$ npm i color-extraction
```

```js
const colorExtraction = require('color-extraction');
```

#### 2.Use

- Get colorName

  > Convert colors to Chinese and English keywords.(Support rgb and hex)

  ```js
  colorExtraction.colorName('#fff'); // { color: '#fff', colorName: [ '白', '白色', 'white' ] }

  colorExtraction.colorName('rgb(0, 255, 0)'); // { color: 'rgb(0, 255, 0)', colorName: [ '绿', '绿色', 'green' ] }
  ```

- Get mainColor and paletteColor

  > Both the mainColor() and paletteColor() methods return a Promise when used in Node.

  ```js
  const img = resolve(process.cwd(), 'lostElk.png');

  colorExtraction
    .mainColor('img', 10)
    .then((color) => {
      console.log(color);
    })
    .catch((err) => {
      console.log(err);
    });

  colorExtraction
    .paletteColor('img', { colorCount: 5, quality: 10 })
    .then((color) => {
      console.log(color);
    })
    .catch((err) => {
      console.log(err);
    });
  ```

### Using in the browser

#### 1.Install

- Install as dependency with npm.

  ```sh
  $ npm i color-extraction
  ```

- Load from a CDN.

  ```js
  <script src="https://unpkg.com/color-extraction"></script>
  ```

#### 2. Import

- As a global variable.

  > The global variable is named colorExtraction instead of color-extraction

  ```js
  <script src="https://unpkg.com/color-extraction"></script>
  ```

- As an ES6 module.

  ```js
  import colorExtraction from 'color-extraction';
  ```

#### 3. Use

- Get colorName

  > Convert colors to Chinese and English keywords.(Support rgb and hex)

  ```js
  colorExtraction.colorName('#fff'); // { color: '#fff', colorName: [ '白', '白色', 'white' ] }

  colorExtraction.colorName('rgb(0, 255, 0)'); // { color: 'rgb(0, 255, 0)', colorName: [ '绿', '绿色', 'green' ] }
  ```

- Get mainColor and paletteColor

  > Both the mainColor() and paletteColor() methods return a Promise when used in browser.

  ```js
  // Get image
  const img = document.getElementById('img');

  // Make sure image is finished loading
  if (img.complete) {
    colorExtraction.mainColor(img, 10).then((colorName) => {
      console.log(colorName);
    });
  } else {
    img.addEventListener('load', function () {
      colorExtraction.mainColor(img, 10).then((colorName) => {
        console.log(colorName);
      });
    });
  }
  ```

## API

### mainColor(image, quality)

**Returns: Promise<{ mainColorHex: String, colorName: [ String, String, String ] }>**

Gets the main color from the image. Returns an object that contains two properties: 1. mainColorHex is a string with a HEX color number representing the extracted color value; 2. colorName is an array that stores the corresponding name of the color.

**image** - When called in the browser, this argument expects an HTML image element, not a URL. When run in Node, this argument expects a path to the image.

**quality** - Quality is an optional argument that must be an Integer of value 1 or greater, and defaults to 10. The number determines how many pixels are skipped before the next one is sampled. We rarely need to sample every single pixel in the image to get good results. The bigger the number, the faster a value will be returned.

---

### paletteColor(image, { colorCount, quality })

**Returns: Promise<[{ paletteColorHex: String, colorName: [ String, String, String ] },...]>**

Get the color palette from the image. Returns an array. The array contains several objects, each of which has two properties :paletteColorHex is a string with a hexadecimal color number representing the extracted color value; 2. colorName is an array that stores the corresponding names of colors.

**image** - When called in the browser, this argument expects an HTML image element, not a URL. When run in Node, this argument expects a path to the image.

**colorCount** - ColorCount is an optional parameter and must be an integer of 1 or greater, with a default value of 5. This number determines how many palette colors to get.

**quality** - Quality is an optional argument that must be an Integer of value 1 or greater, and defaults to 10. The number determines how many pixels are skipped before the next one is sampled. We rarely need to sample every single pixel in the image to get good results. The bigger the number, the faster a value will be returned.

---

### colorName(color)

**Returns: { color: String, colorName: [ String, String, String ] }**

Gets the name of the color from the HEX or RGB color value. Returns an object with two properties :color is the passed color value; 2. colorName is an array that stores color names.

**color** - Support rgb and hex.

## FAQ

### Do I have to wait for the image to load?

Yes. If you see an error that reads: `Cannot read property '0' of null`, it is likely that the image had not finished loading when you passed it to `mainColor()` or `paletteColor()`.

```js
// RISKY 🙀
const img = document.getElementById('img');

colorExtraction.paletteColor(img, { colorCount: 3, quality: 10 });
```

```js
// RISKY 😼
const img = document.getElementById('img');

if (img.complete) {
  colorExtraction.paletteColor(img, { colorCount: 3, quality: 10 });
} else {
  img.addEventListener('load', function () {
    colorExtraction.paletteColor(img, { colorCount: 3, quality: 10 });
  });
}
```

### How do I test the script locally?

If you are testing the script locally in a web browser, you might see the following error:

```
Access to script at 'file://...' from origin 'null' has been blocked by CORS policy.
```

This is because the browser restricts direct access to the filesystem.

To get around this, you can set up a minimal server to host the files. One option is [http-server](https://github.com/http-party/http-server). To run this on demand without installing it as a project dependency, you can use the npx command:

```sh
$ npx http-server
```

Now you can visit http://localhost:8080 to view your server.

### Does it work if the image is hosted on another domain?

If you manage the server hosting the image...

Yes. If you are seeing an error that reads:

```
The canvas has been tainted by cross-origin data.
```

then you are running into a cross-origin resouce sharing (CORS) issue. Check the following two items:

1. **CORS policy on the server.** Is the server hosting the image properly configured? Make sure the requesting domain is whitelisted in the access-control-allow-origin header, or the server hosting the image has an open policy:

   ```
   access-control-allow-origin: *
   ```

2. **crossorigin attr.** The HTML image element must be given a crossorigin attribute.

   ```html
   <img
     src="https://api.lostelk.cn/files/746/serve?size=large"
     crossorigin="anonymous"
   />
   ```

   If you're dynamically adding the image element, you can do the following:

   ```js
   const img = new Image();

   img.addEventListener('load', function() {
     colorExtraction.mainColor((img);
   });

   img.crossOrigin = 'Anonymous';
   img.src = 'https://api.lostelk.cn/files/746/serve?size=large'
   ```
