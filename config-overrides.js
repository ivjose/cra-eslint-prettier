const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');

// const defaultLess = require('./src/styles/default.less');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    modifyVars: {
      'ant-theme-file': `; @import '${path.resolve(__dirname, './src/styles/default.less')}'`
    },
    javascriptEnabled: true
  }),
  addWebpackAlias({
    'react-dom': '@hot-loader/react-dom'
  })
);
