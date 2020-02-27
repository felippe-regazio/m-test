module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/m-test/dist/'
    : '/'
}