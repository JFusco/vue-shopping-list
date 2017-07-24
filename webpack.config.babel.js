import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const { NODE_ENV } = process.env;

const paths = {
	output: path.join(__dirname, '/build'),
	src: './client/js'
};

module.exports = {
	devtool: '#eval-source-map',
	entry: ['webpack-hot-middleware/client', './client/js/index.js'],
	output: {
    path: paths.output,
		filename: '[name]-[hash].[id].bundle.js',
    publicPath: '/'
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common-[chunkhash].[id].js',
      minChunks: ({ resource }) => /node_modules/.test(resource)
		}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: 'manifest-[hash].[id].js'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './client/index.html')
    }),
    new webpack.DefinePlugin({
      '__DEV__': process.env.NODE_ENV === 'development',
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV || 'development')
      }
    })
	],
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
