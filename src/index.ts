import nodeModule from './node/index';
import browserModule from './browser/index';
let libraryModule: any;

if (typeof window !== 'undefined') {
  // 浏览器环境
  libraryModule = browserModule;
} else {
  // Node.js 环境
  libraryModule = nodeModule;
}

export default libraryModule;
