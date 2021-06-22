import merge from 'webpack-merge'
import { resolve } from 'path'
import baseConf from './base'
import * as webpack from 'webpack'
import { InjectManifest } from 'workbox-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import env from '@env'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
const hotMiddlewareScript = `webpack-hot-middleware/client?path=http://localhost:4141/__webpack_hmr`

const conf: webpack.Configuration = {
  context: resolve(process.cwd(), 'client'),
  entry: {
    'app.js': env.HMR_ENABLED
      ? [hotMiddlewareScript, './entry.tsx']
      : './entry.tsx',
    'sw.js': './sw.ts'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          env.DEV_SERVER ? 'style-loader' : MiniCssExtractPlugin.loader,
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentContext: resolve(__dirname, 'client'),
                localIdentName: '[hash:base64]'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './static',
          to: './static/'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    ...(!env.HMR_ENABLED
      ? [
          new InjectManifest({
            swSrc: './sw.ts',
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            dontCacheBustURLsMatching: /\*hot-update.json$/
          })
        ]
      : [
          new webpack.HotModuleReplacementPlugin({
            requestTimeout: 100
          }),
          new webpack.NoEmitOnErrorsPlugin()
        ])
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'lib.js',
          test: /node_modules\/(?!(normalize\.css))/,
          chunks: 'all',
          enforce: true
        },
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  output: {
    filename: 'js/[name]',
    chunkFilename: '[name]',
    path: resolve(`./${env.OUT_DIR}/client`),
    publicPath: env.HMR_ENABLED ? 'http://localhost:4141/' : '/'
  }
}

export default merge(baseConf, conf)
