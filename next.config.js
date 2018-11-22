const withImages = require('next-images')

module.exports = withImages({
  assetPrefix: process.env.NODE_ENV === 'production' ? '/compare-stocks' : '',
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
})
