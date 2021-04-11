const {i18n} = require('./next-i18next.config')

module.exports = {
  i18n,
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  target: "experimental-serverless-trace",
}
