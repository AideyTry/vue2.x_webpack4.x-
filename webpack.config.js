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
  resolve:{
    extensions: ['.js','.vue','.json'],  // .js,.vue,.json文件可以忽略后缀，按先后顺序查找
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src'),
      'views': path.resolve('src/views')
    }
  },
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