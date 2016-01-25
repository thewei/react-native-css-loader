## react-native-css-loader ![NPM version](https://img.shields.io/npm/v/react-native-css-loader.svg?style=flat)

You can use react-native-css-loader width react-native-webpack-server, which can use webpack to built react-native app better.

> react-native-css-loader, inspired by gulp-react-native-stylesheet-css, thanks.

### Installation
```bash
$ npm install react-native --save
$ npm install react-native-css-loader --save-dev
```

### Usage
```js
var styles = require("react-native-css!./file.css");
// => returns react-native stylesheet object

```
Or within the webpack config:
```js
// only css:
module: {
  loaders: [{
    test: /\.css$/,
    loader: 'react-native-css-loader'
  }]
}

// use stylus:
module: {
  loaders: [{
    test: /\.styl$/,
    loader: 'react-native-css-loader!stylus-loader'
  }]
}

// use sass:
module: {
  loaders: [{
    test: /\.scss$/,
    loader: 'react-native-css-loader!sass-loader'
  }]
}

// use less:
module: {
  loaders: [{
    test: /\.less$/,
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
