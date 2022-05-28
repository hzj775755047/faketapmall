const webpack = require("webpack");
module.exports ={
  configureWebpack: {
    resolve: {
      extensions: [], //配置可以忽略的文件的后缀名，
      alias: { // 配置别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
