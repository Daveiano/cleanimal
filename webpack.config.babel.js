import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist/assets')
};

const config = {
  entry: `${PATHS.app}/js/client.jsx`,
  devServer: {
    writeToDisk: true
  },
  module: {
    rules: [
      {
        exclude: [/(node_modules|bower_components)/, /\.(gif|png|jpeg|jpg|svg)$/i],
        test: /(\.jsx|\.js)$/,
        use: { loader: 'babel-loader' }
      },
      {
        exclude: /(node_modules)/,
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'font/[name].[ext]' }
          }
        ]
      },
      {
        loader: 'url-loader?limit=100000',
        test: /\.(png|gif|woff|woff2|eot|ttf|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/
      },
      {
        test: /(\.scss|\.sass|\.css)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-easy-import')({
                  extensions: ['.css', '.scss', '.sass'],
                  prefix: '_'
                }),
                require('autoprefixer')()
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              include: [
                path.join(__dirname, 'node_modules')
              ]
            }
          }
        ]
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: PATHS.build,
    //publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // Both options are optional.
      chunkFilename: '[id].css',
      filename: 'style.css'
    })
  ],
  resolve: { extensions: ['.jsx', '.js', '.scss', '.sass', '.css', '.json'] }
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.output.filename = 'bundle.js';
  }

  return config;
};
