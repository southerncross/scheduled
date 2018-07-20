import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/client/index.tsx'),
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/client/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, './src/server/public'),
    filename: '[name].js',
    publicPath: '/'
  }
};

export default config;
