const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.js', // Pagrindinis JS failas
  output: {
    filename: 'bundle.js', // Sugeneruotas JS failas
    path: path.resolve(__dirname, 'dist'), // Išvesties katalogas
    clean: true, // Išvalo senus failus iš dist
  },
  module: {
    rules: [
      // SCSS failų apdorojimas
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      // Paveikslėlių apdorojimas
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource', // Paveikslėliai perkeliami į dist katalogą
        generator: {
          filename: 'assets/[name][hash][ext]', // Sugeneruotų failų pavadinimų formatas
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }),
  ],
  mode: 'development', // Arba 'production'
};
