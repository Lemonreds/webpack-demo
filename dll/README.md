### dll

webpack.DllPlugin 与 webpack.DllReferencePlugin 的demo，用于提取常用的第三方模块，例如 react、react-dom，不用重复进行编译构建。

### 使用

dll目录下 执行npm run build

### 思路

1. webpack.dll.js中使用 webpack.DllPlugin 将 react、react-dom 提取动态链接库出来，即dist/static的文件

2. webpack.config.js中使用 webpack.DllReferencePlugin 引入刚刚生成的动态链接库的 manifest.json

3. 执行 webpack ./webpack.config.js 时,webpack会自动过滤react、react-dom的编译，打包后的bundle.js也不会再冗余打包

4. 通过 HtmlWebpackPlugin，在 document.ejs 中在index.html中引入打包后的dll script文件