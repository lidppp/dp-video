# 开发环境搭建

开发自己的库,搭建一个开发环境是必不可少的

我们需要一个编译TS,css压缩和兼容性处理的打包工具, 以及一个可以进行热编译的开发环境

因为工作中使用webpack比较多一点, 也相对熟一点就选webpack了

## webpack搭建

创建文件夹, 打开cmd命令行工具,cd到刚才创建的文件夹下执行下方命令

```shell
npm init -y
npm i webpack webpack-cli webpack-dev-server -g
```

等待执行的过程中在根目录中创建`webpack.config.js`

写入以下内容

```js
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
```



上方引入了一些loader和plugin

执行  这些包使用到的都在上方的webpack.config.json中有注释, 没有使用到的是使用到的包的依赖

```shell
npm i @babel/core @babel/polyfill @babel/preset-env babel-loader clean-webpack-plugin core-js css-loader html-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin postcss postcss-loader postcss-preset-env style-loader terser-webpack-plugin ts-lint ts-loader typescript -D
```

等待执行完成后

在package.json最后追加

```json
  "browserslist": {
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "production": [
      ">0.01%",
      "not dead",
      "not op_mini all"
    ]
  },
  "scripts": {
    "dev": "npx webpack-dev-server",
    "build": "webpack --mode production"
  },
```

> npm run dev   启动服务
>
> npm run build 打包 指定模式为生产环境

## 文件目录

| - node_modules  				包存放的位置

|- src/

|- |- index.js   						主入口文件

|- |- index.html 					测试HTML文件

|- |- core/								核心文件

|- |- |- baseType.d.ts			基本数据类型

|- |- |- creatController.ts	  创建控制条

|- |- |- index.ts						播放器核心文件

|- |- |- utils.ts 						工具库

|- |- css/									整体样式

|- |- |- global.css					整体样式css文件

|- |- icon/								存放项目中所用到的icon基于阿里巴巴矢量图标库

|- |- |- 存放一些iconfont文件

|- |- video/

|- |- |- 存放测试视频

|- dist/										存放打包文件

|- docs/									存放本系列md文档

|- packground.json  			 包管理文件

|- webpack.config.json 		webpack配置文件



### 测试是否搭建成功

根据上方文件目录结构创建好文件

在index.js中写入以下内容

```js
console.log("hello world")
```

执行`npm run dev` 在浏览器中查看控制台看是否出现hello world字样

至此开发环境搭建完成