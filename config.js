const isDev = process.env.NODE_ENV !== "production";
/**
 * @description 前后端通用配置
 */
const CONFIG = {
  DEV: isDev,
  PORT: 8888,
  DEV_SERVER_PORT: 4396,
  HOST: isDev ? "http://127.0.0.1" : "http://ide.jeecms.com",
  DOMAIN: isDev ? "http://127.0.0.1:8888" : "http://ide.jeecms.com",
};

module.exports = {
  CONFIG,
};
