var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      AssignmentList: 'app/components/AssignmentList.jsx',
      Assignment: 'app/components/Assignment.jsx',
      edmodoAssignmentAPI: 'app/api/edmodoAssignmentAPI.jsx',
      // Weather: 'app/components/Weather.jsx',
      // WeatherMessage: 'app/components/WeatherMessage.jsx',
      // WeatherForm: 'app/components/WeatherForm.jsx',
      // About: 'app/components/About.jsx',
      // Examples: 'app/components/Examples.jsx',
      // openWeatherMap: 'app/api/openWeatherMap.jsx',
      // ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bowe_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
