const path = require('path');

module.exports = {
  mode: 'development', // production
  // 入口文件配置项，可以是单一入口，也可以是多个
  entry: {
    entry: './01/src/scripts/index.js'
  },
  // 出口文件配置项目
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  // 模块，比如预处理scss、图片、压缩js等等
  // modules: {},
  // 插件，用与生产模版，执行拷贝任务等等
  // plugins: [],
  // 配置webpack开发服务的功能
  devServer: {
    port: 9999,
    progress: true,
    contentBase: './dist'
  }
};