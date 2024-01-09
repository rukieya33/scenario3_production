const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false
    }
}
})
