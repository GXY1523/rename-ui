// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const path=require('path')

module.exports={
  // 修改 src 为 examples
  pages:{
    index:{
      entry:"examples/main.js",
      template:"public/index.html",
      filename:"index.html"
    }
  },

  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack:config=>{
    config.resolve.alias
      .set('@',path.resolve('examples'))
      .set('~',path.resolve('package'))
  config.module
    .rule('js')
    .include
      .add(/package/)
      .end().include.add(/examples/)
      .end()
    .use('babel')
      .loader('babel-loader')
      .tap(options=>{
        return options
      })
  },
  
  lintOnSave:false
}