# color-extraction

[![npm](https://img.shields.io/npm/v/color-extraction?color=blue)](https://www.npmjs.com/package/color-extraction)
[![GitHub issues](https://img.shields.io/github/issues/1363944642/color-extraction)](https://github.com/1363944642/color-extraction/issues)
[![npm](https://img.shields.io/npm/dt/color-extraction)](https://www.npmjs.com/package/color-extraction)
![npm package minimized gzipped size (select exports)](https://img.shields.io/bundlejs/size/color-extraction)
[![NPM](https://img.shields.io/npm/l/color-extraction)](http://opensource.org/licenses/MIT)

[English](README.md) · [简体中文](README.ZH.md)

获取图像中的主色或调色板以及英文和中文的颜色名称。✨

**_适用于浏览器和 Node 环境。_**

## 入门

### Node 中使用

#### 1.安装和导入

```sh
$ npm i color-extraction
```

```js
const colorExtraction = require('color-extraction');
```

#### 2.使用

- 获取颜色名称

  > 将颜色转换为中英文关键字。(支持 Hex、RGB)

  ```js
  colorExtraction.colorName('#fff'); // { color: '#fff', colorName: [ '白', '白色', 'white' ] }

  colorExtraction.colorName('rgb(0, 255, 0)'); // { color: 'rgb(0, 255, 0)', colorName: [ '绿', '绿色', 'green' ] }
  ```

- 获取图像主色调和调色板

  > mainColor()和 paletteColor()方法在 Node 中使用时都会返回一个 Promise。

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

### 在浏览器中使用

#### 1.安装

- 作为 npm 的依赖项安装。

  ```sh
  $ npm i color-extraction
  ```

- 从 CDN 加载。

  ```js
  <script src="https://unpkg.com/color-extraction"></script>
  ```

#### 2. 导入

- 作为一个全局变量。

  > 全局变量命名为 coloreextraction，而不是 color-extraction

  ```js
  <script src="https://unpkg.com/color-extraction"></script>
  ```

- 作为 ES6 模块。

  ```js
  import colorExtraction from 'color-extraction';
  ```

#### 3. 使用

- 获取颜色名称

  > 将颜色转换为中英文关键字。(支持 Hex、RGB)

  ```js
  colorExtraction.colorName('#fff'); // { color: '#fff', colorName: [ '白', '白色', 'white' ] }

  colorExtraction.colorName('rgb(0, 255, 0)'); // { color: 'rgb(0, 255, 0)', colorName: [ '绿', '绿色', 'green' ] }
  ```

- 获取图像主色调和调色板

  > mainColor()和 paletteColor()方法在浏览器中使用时都会返回一个 Promise。

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

从图像中获取主颜色。返回一个包含两个属性的对象:mainColorHex 是一个字符串，用十六进制颜色表示提取的颜色值;2. colorName 是存储颜色对应名称的数组。

**image** - 当在浏览器中调用时，该参数需要一个 HTML 图像元素，而不是 URL。当在 Node 中运行时，这个参数需要一个到映像的路径。

**quality** - quality 是一个可选参数，必须是值为 1 或更大的整数，默认为 10。这个数字决定了在下一个采样之前跳过多少像素。我们很少需要采样图像中的每一个像素来获得好的结果。数字越大，返回值的速度就越快。

---

### paletteColor(image, { colorCount, quality })

**Returns: Promise<[{ paletteColorHex: String, colorName: [ String, String, String ] },...]>**

从图像中获取调色板。返回一个数组。数组中的包含着若干对象，每个对象都有两个属性:paletteColorHex 是一个字符串，用十六进制颜色数表示提取的颜色值;2. colorName 是存储颜色对应名称的数组。

**image** -当在浏览器中调用时，该参数需要一个 HTML 图像元素，而不是 URL。当在 Node 中运行时，这个参数需要一个到映像的路径。

**colorCount** - ColorCount 是一个可选参数，必须是 1 或更大的整数，默认值为 5。这个数字决定了调色板颜色的数量。

**quality** - quality 是一个可选参数，必须是值为 1 或更大的整数，默认为 10。这个数字决定了在下一个采样之前跳过多少像素。我们很少需要采样图像中的每一个像素来获得好的结果。数字越大，返回值的速度就越快。

---

### colorName(color)

**Returns: { color: String, colorName: [ String, String, String ] }**

从 HEX 或 RGB 颜色值获取颜色的名称。返回一个具有两个属性的对象:color 是传递的颜色值;2. colorName 是一个存储颜色名称的数组。

**color** - 支持 Hex, RGB。

## 常见问题

### 必须等待图像加载吗?

是的。如果你看到这样的错误:`Cannot read property '0' of null`，很可能是当你将图像传递给`mainColor()`或`paletteColor()`时，图像还没有完成加载。

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

### 如何在本地测试脚本?

如果你在本地 web 浏览器中测试脚本，你可能会看到以下错误:

```
Access to script at 'file://...' from origin 'null' has been blocked by CORS policy.
```

这是因为浏览器限制了对文件系统的直接访问。

为了解决这个问题，您可以设置一个最小的服务器来托管文件。一个选项是[http-server](https://github.com/http-party/http-server)。要按需运行此命令，而不将其作为项目依赖项安装，你可以使用 npx 命令:

```sh
$ npx http-server
```

现在就可以访问 http://localhost:8080 来测试了。

### 如果图像托管在另一个域中，它是否生效?

如果您管理托管图像的服务器…

是的。如果您看到如下错误:

```
The canvas has been tainted by cross-origin data.
```

那么您就遇到了跨域资源共享(CORS)问题。检查以下两项:

1. **服务器上的 CORS 策略。** 托管映像的服务器是否配置正确?确保请求域在 access-control-allow-origin 头中被列入白名单，或者托管图像的服务器有一个开放策略:

   ```
   access-control-allow-origin: *
   ```

2. **跨域属性.** HTML 图像元素必须被赋予一个跨源属性。

   ```html
   <img
     src="https://api.lostelk.cn/files/746/serve?size=large"
     crossorigin="anonymous"
   />
   ```

   如果您要动态添加 image 元素，您可以这样做:

   ```js
   const img = new Image();

   img.addEventListener('load', function() {
     colorExtraction.mainColor((img);
   });

   img.crossOrigin = 'Anonymous';
   img.src = 'https://api.lostelk.cn/files/746/serve?size=large'
   ```
