module.exports = {
  target: process.env.SK_APP_ID ? "serverless" : "server",
  assetPrefix: process.env.PUBLIC_PATH
};
