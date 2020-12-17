/**
 * @description 前后端通用配置
 */
const CONFIG = {
  DEV: process.env.NODE_ENV !== "production",
  PORT: 8888,
  DEV_SERVER_PORT: 4396,
  HOST:
    process.env.NODE_ENV !== "production"
      ? "http://127.0.0.1"
      : "http://127.0.0.1",
};

module.exports = {
  CONFIG,
};
