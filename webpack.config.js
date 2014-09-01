var webpack = require('webpack');

var jsxLoader = 'jsx?insertPragma=React.DOM&harmony=true';

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './scripts/main'
  ],
  output: {
	path: __dirname + '/public/',
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
	//modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx','.css']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?/,
		exclude: /node_modules/,
        loader: 'jshint!' + jsxLoader
      }
    ],
    loaders: [
      { test: /\.jsx$/,  loaders: ['react-hot', 'jsx'] },
	  { test: /\.css$/,  loader: "style-loader!css-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
	  { test: /\.json$/, loader: 'json' },
      { test: /\.jpg$/ , loader: "url?limit=10000&mimetype=image/jpg" },
 	  { test: /\.png$/ , loader: "url?limit=10000&mimetype=image/png" },
	  { test: /\.woff$/, loader: "url?limit=10000&mimetype=application/font-woff" },
	  { test: /\.ttf$/ , loader: "file?mimetype=application/vnd.ms-fontobject" },
	  { test: /\.eot$/ , loader: "file?mimetype=application/x-font-ttf" },
	  { test: /\.svg$/ , loader: "file?mimetype=image/svg+xml" },
    ]
  },
  externals: {
    //'showdown': 'window.Showdown'
  }
};
