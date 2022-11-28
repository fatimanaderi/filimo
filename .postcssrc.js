/* eslint-disable */
// https://github.com/michael-ciniawsky/postcss-load-config
const rtl = require("postcss-rtlcss");
module.exports = {
  plugins: [
    // to edit target browsers: use "browserslist" field in package.json
    require("postcss-rtlcss"),
    rtl({ fromRTL: true }),
    require("autoprefixer"),
  ],
};
