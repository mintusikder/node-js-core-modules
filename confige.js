require("dotenv").config();

const config = {
  app: {
    name: process.env.APP_NAME || "Default name",
    version: process.env.APP_VERSION,
    port: process.env.PORT || 8080,
    env: process.env.NODE_ENV,
  },
};
console.log(config.app);
module.export = config;
