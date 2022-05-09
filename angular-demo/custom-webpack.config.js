const {name} = require('./package');
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    library: `${name}-[name]`,
    libraryTarget: 'umd',
    //加这行 报错，去掉
    // jsonpFunction: `webpackJsonp_${appName}`,
  },
};
