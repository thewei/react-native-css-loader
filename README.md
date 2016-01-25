# react-native-css-loader ![NPM version](https://img.shields.io/npm/v/react-native-css-loader.svg?style=flat)

You can use react-native-css-loader width react-native-webpack-server, which can use webpack to built react-native app better.

> react-native-css-loader, inspired by gulp-react-native-stylesheet-css, thanks.

## Installation
```bash
$ npm install react-native --save
$ npm install react-native-css-loader --save-dev
```

## Usage
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

## Properties supported

Any property found in your CSS will be camelCased. By default, this plugin will always output values as JavaScript Number or Boolean objects when appropriate. Values with units attached, including "em" and "px," will be output without their unit suffixes.

### Special-case properties

The following properties output different keys to satisfy React Native's requirements. Unless otherwise noted, the values for each correspond with CSS3.

Property | Example Values | Notes
---------|----------------|------
margin | 2px<br />2px 4px<br />3px 1px 5px<br />1px 3px 2px 6px |
padding | 2px<br />2px 4px<br />3px 1px 5px<br />1px 3px 2px 6px |
box-shadow | none<br />0 2px 4px rgba(52, 21, 23, 0.32) | Inset shadows and spread values are not supported.
flex | 1<br />1 30px<br />1 2 10% | __Only the first value will be output__ and the rest will be ignored, as React Native does not support flex-basis or flex-shrink.
transform | perspective(90)<br />rotate(10deg)<br />rotateX(5deg)<br />rotateY(10deg)<br />rotateZ(15deg)<br />rotate3d(5deg, 10deg, 15deg)<br />scale(1.2)<br />scaleX(1.5)<br />scaleY(0.5)<br />scale2d(1.5, 0.5) or scale3d(1.5, 0.5)<br />translateX(5px)<br />translateY(10px)<br />translate2d(5px, 10px) or translate3d(5px, 10px) | You may chain multiple transformations together with a space delimiter, like in CSS3 (see example above).

## Options

Additional options can be passed to the plugin to customize its output. For example:

```javascript
    ...
    .pipe(reactNativeStylesheetCss({ outputPlainObject: true }))
    ...
```

__Supported options:__

Option | Values | Default | Notes
-------|--------|---------|------
outputPlainObject | Boolean | false | If true, the final output will be only an object of style rules, without requiring React or building a React StyleSheet object.


## Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3
