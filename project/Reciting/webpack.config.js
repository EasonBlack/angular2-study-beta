module.exports = {
  entry: "./app/app.ts",
  output: {
    filename: "./bundle/bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [{
      test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
    }]
  }
};