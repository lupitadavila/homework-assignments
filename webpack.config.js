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
      AssignmentContent: 'app/components/AssignmentContent.jsx',
      AssignmentNav: 'app/components/AssignmentNav.jsx',
      SubmissionList: 'app/components/SubmissionList.jsx',
      SubmissionsContent: 'app/components/SubmissionsContent.jsx',
      edmodoAssignmentAPI: 'app/api/edmodoAssignmentAPI.jsx',
      edmodoSubmissionsAPI: 'app/api/edmodoSubmissionsAPI.jsx',
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
