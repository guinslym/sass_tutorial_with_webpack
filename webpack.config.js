var path = require('path');


module.exports = {
	entry: './src/main.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	resolveLoader: {
    	moduleExtensions: ['-loader']
  	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},

		]
	}
};