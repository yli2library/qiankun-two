module.exports = {
  devServer: {
    port: 8002,
    // 关闭主机检查，使微应用可以被fetch
    disableHostCheck: true,
    // 配置跨域请求头，解决开发环境跨域问题
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: 'VueMicroAppTwo',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_VueMicroAppTwo`
    }
  }
}