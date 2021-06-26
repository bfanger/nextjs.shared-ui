const withTM = require("next-transpile-modules")(["shared-ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
