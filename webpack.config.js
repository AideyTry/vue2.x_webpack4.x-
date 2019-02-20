const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html' // 生成的内存中首页的名称
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development', //development production
  plugins: [
    htmlPlugin,
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}