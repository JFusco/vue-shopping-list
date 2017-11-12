import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const { NODE_ENV } = process.env;

const paths = {
  output: path.join(__dirname, '/build'),
  src: './client/js'
};

let htmlConfig = {
  template: path.resolve(__dirname, './client/index.html')
};

if(NODE_ENV === 'production'){
  htmlConfig = {
    ...htmlConfig,
    minify: {
      collapseWhitespace: true
    }
  }
}

let plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    filename: 'common-[chunkhash].[id].js',
    minChunks: ({ resource }) => /node_modules/.test(resource)
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    filename: 'manifest-[hash].[id].js'
  }),
  new HtmlWebpackPlugin(htmlConfig),
  new webpack.DefinePlugin({
    '__DEV__': NODE_ENV === 'development',
    'process.env': {
      'NODE_ENV': JSON.stringify(NODE_ENV || 'development')
    }
  })
];

if (NODE_ENV !== 'production'){
  plugins = [
    ...plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

const entry = ['./client/js/index.js'];

if(NODE_ENV !== 'production'){
  entry.unshift('webpack-hot-middleware/client');
}

module.exports = {
  devtool: NODE_ENV === 'production' ? 'eval' : 'eval-source-map',
  entry,
  output: {
    path: paths.output,
    filename: '[name]-[hash].[id].bundle.js',
    publicPath: '/'
  },
  plugins,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss'],
    alias: {
      'scss': path.resolve(__dirname, 'client/scss')
    }
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    noInfo: true,
    log: false,
    reload: true,
    stats: {
      colors: true
    }
  }
};
