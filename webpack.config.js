var { resolve } = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssassetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")


let pathsToClean = ['dist'];

// the clean options to use
let cleanOptions = {
  root: resolve(__dirname),
  // exclude: ['shared.js'],
  verbose: true,
  dry: false,
};

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
          loader: "ts-loader"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            // 预设: 只是babel做怎样的兼容性处理  下方是基本兼容性处理
            // 只能做普通的兼容性处理 无法处理如promise等等
            // 全部兼容性处理 使用 @babel/polyfill
            // 这个包会将所有兼容处理引入,体积太大
            // 所以我们需要做按需加载 corejs包
            presets: [
              //  注意此处的中括号
              [
                '@babel/preset-env',
                {
                  // 按需加载
                  useBuiltIns: 'usage',
                  // 指定corejs版本
                  corejs: {
                    version: 3,
                  },
                  // 指定浏览器版本
                  targets: {
                    chrome: '60',
                    firefox: '60',
                    ie: '9',
                    safari: '10',
                    edge: '17',
                  },
                },
              ],
            ],
          },
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
      new OptimizeCssassetsWebpackPlugin()
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          include: /min/,
        }),
      ],
    },
    mode: 'development',
    resolve: {
      extensions: [".ts",".js",".json"]
    },
    devServer: {
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

