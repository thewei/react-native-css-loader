## react-native-css-loader ![NPM version](https://img.shields.io/npm/v/react-native-css-loader.svg?style=flat)

You can use react-native-css-loader width react-native-webpack-server, which can use webpack to built react-native app better.

> react-native-css-loader, inspired by gulp-react-native-stylesheet-css, thanks.

### Installation
```bash
$ npm install react-native-css-loader --save-dev
```

### Usage
```js
var styles = require("react-native-css!./file.css");
// => returns react-native stylesheet object

```
Or within the webpack config:
```js
only css:
module: {
  loaders: [{
    test: /\.css$/,
    loader: 'react-native-css-loader'
  }]
}

use stylus:
module: {
  loaders: [{
    test: /\.styl$/,
    loader: 'react-native-css-loader!stylus-loader'
  }]
}

use sass:
module: {
  loaders: [{
    test: /\.styl$/,
    loader: 'react-native-css-loader!sass-loader'
  }]
}

use less:
module: {
  loaders: [{
    test: /\.styl$/,
    loader: 'react-native-css-loader!less-loader'
  }]
}

```

### API
check this file: `index.js`

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT license
Copyright (c) 2015 thewei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor]()
built upon love by [docor](git+https://github.com/turingou/docor.git) v0.3.0
