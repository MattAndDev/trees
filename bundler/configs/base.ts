import * as webpack from 'webpack'
import { Configuration } from 'webpack'
import { resolve } from 'path'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import env from '@env'
const conf: Configuration = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { configFile: resolve(process.cwd(), './tsconfig.json') }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/'
          }
        }
      }
    ]
  },
  stats: 'errors-only',
  plugins: [
    new webpack.EnvironmentPlugin({
      ...env
    })
  ],
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    },
    extensions: ['.js', '.ts', '.tsx', '.css'],
    plugins: [new TsconfigPathsPlugin()]
  }
}

export default conf
