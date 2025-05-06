const { createRequestHandler } = require("@remix-run/node");
const build = require("./build/server");

module.exports = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
}); 