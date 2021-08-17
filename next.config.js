module.exports = {
  reactStrictMode: true,

  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
      },
    });
    return config;
  },

}


