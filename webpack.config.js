var { resolve } = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssassetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Webpack = require("webpack")


module.exports = (env, argv)=>{
  return {
    entry: {
      'dp-video': './src/index.js',
      'dp-video.min': './src/index.js',
    },
    output: {
      filename: 'js/[name].js',
      library: 'dpVideo', // 指定包名
      libraryExport: 'default', // _entry_return_.default;
      libraryTarget: 'var',
      path: resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          // 匹配那些文件
          test: /\.css$/,
          // 使用哪些loader处理
          use: [
            argv.mode == "production" ? MiniCssExtractPlugin.loader : 'style-loader',
            // 执行顺序，从右到左，从下到上，依次执行
            // 'style-loader',
            'css-loader',
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: () => [
                  require("postcss-preset-env")()
                ]
              }
            }
          ],
        },
        {
          test: /\.tsx?$/,
          use:['babel-loader',"ts-loader"],
          // use:["ts-loader"],
          exclude: [resolve(__dirname, "node_modules")]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          // loader: 'url-loader?name=images/[name].[ext]',
          loader: 'url-loader',
          options: {
            limit: 10,
            name:'font/[name].[ext]'
          }
        },
        {
          test: /\.(mp4)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            name:'video/[name].[ext]',
            limit:10
          }
        }
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: './css/style.css',  // 从 .js 文件中提取出来的 .css 文件的名称
      }),
      new OptimizeCssassetsWebpackPlugin(),
      new BundleAnalyzerPlugin(),

    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          include: /min/,
        }),
      ],
    },
    mode: argv.mode == "production" ? "production" : 'development',
    resolve: {
      extensions: [".ts",".js",".json"]
    },
    //
    devServer: argv.mode == "production" ? {} :{
      // 端口号
      port: 7000,
      // 项目构建后的路径
      contentBase: resolve(__dirname, 'dist'),
      // 启用g-zip压缩
      compress: true,
      // 自动打开浏览器
      open: true,
      // 开启HMR功能
      // 当修改了webpack配置,新配置要想生效,必须重启webpack配置
      hot: true,
    },
  }
}

