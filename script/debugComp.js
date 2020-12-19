/**
 * @description 组件的调试启动脚本
 */
const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.comp");
const { CONFIG } = require("../config");

let debugComp = {};

let debugCompArr = [];

process.argv.some((item) => {
  const debugArg = item.match(/^debug=/);

  if (debugArg) {
    const compStr = item.replace(/^debug=/, "");

    debugCompArr = compStr.split(",");
  }
  return debugArg;
});

debugCompArr.forEach((item) => {
  debugComp[item] = `./comp/${item}/index.js`;
});

Object.assign(webpackConfig, {
  entry: debugComp,
  output: {
    path: path.join(process.cwd(), "./.build/debug"),
    library: "[name]",
    libraryTarget: "this",
    filename: "[name].js",
    chunkFilename: "[name].js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          test: /[\\/]node_modules[\\/]/,
          name: "commons-dev",
          priority: 10,
        },
      },
    },
  },
});

const options = {
  hot: true,
  inline: true,
  port: CONFIG.DEV_SERVER_PORT,
  stats: "minimal",
  overlay: {
    errors: true,
    warnings: true,
  },
  setup(app) {
    app.use("*", (req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      next();
    });
  },
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, options);

server.listen(CONFIG.DEV_SERVER_PORT);
console.log(`\x1B[32m★\x1B[0mweb_channel\x1B[32m★\x1B[0m 调试以下组件：`);
console.log(`${debugCompArr.join(",")}`);
console.log(
  `页面调试组件：\x1B[35m${CONFIG.DOMAIN}/page?debug_comp=${debugCompArr.join(
    ","
  )}\x1B[0m`
);
console.log(
  `编辑器内调试组件：\x1B[35m${
    CONFIG.DOMAIN
  }/edit?debug_comp=${debugCompArr.join(",")}\x1B[0m`
);
