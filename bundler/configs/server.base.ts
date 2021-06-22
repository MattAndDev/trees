import { resolve } from 'path'
import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import baseConf from './base'
import env from '@env'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const conf: Configuration = {
  target: 'node',
  context: resolve(process.cwd(), 'server'),
  entry: {
    'index.js': './index.ts'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    })
  ],
  output: {
    filename: 'js/[name]',
    chunkFilename: '[name]',
    path: resolve(`./${env.OUT_DIR}/server`),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'js/lib.js',
          test: /node_modules/,
          enforce: true
        }
      }
    }
  }
}

export default merge(baseConf, conf)
