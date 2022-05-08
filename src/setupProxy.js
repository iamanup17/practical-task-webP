const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/api/products.php', {
      target: 'https://nick.wpweb.co.in',
      changeOrigin: true,
    })
  );
};
