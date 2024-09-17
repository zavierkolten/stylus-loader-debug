const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const myStylusPlugin = require('./stylus-plugin')

const cssUses = [
  {
    loader: MiniCssExtractPlugin.loader,
  },
  {
    loader: 'css-loader',
    options: {
      modules: false,
    },
  },
]

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(?:css|postcss|pcss)$/,
        sideEffects: true,
        use: cssUses,
        resolve: {
          preferRelative: true,
        },
      },
      {
        test: /\.styl(us)?$/,
        sideEffects: true,
        use: [
          ...cssUses,
          /* config.module.rule('stylus').use('stylus') */
          {
            loader: require.resolve('stylus-loader'),
            options: {
              sourceMap: true,
              stylusOptions: {
                includeCSS: true,
                use: [myStylusPlugin],
              },
            },
          },
        ],
        resolve: {
          preferRelative: true,
        },
      },
    ],
  },
};
