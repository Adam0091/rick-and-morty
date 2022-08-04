const path = require('path');
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [{
    plugin: CracoAlias,
    options: {
      source: "options",
      baseUrl: "./",
      aliases: {
        '@': './src',
        "@components": './src/components',
        "@containers": './src/containers',
        "@constants": './src/constants',
        "@routes": './src/routes',
        "@utils": './src/utils',
        "@types": './src/types',
        "@assets": './src/assets',
        "@UI-Kit": './src/components/UI-Kit'
      }
    }
  }]
};