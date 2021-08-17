module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.wav$/,
      use: {
        loader: 'url-loader',
      },
    });
    return config;
  },
}
