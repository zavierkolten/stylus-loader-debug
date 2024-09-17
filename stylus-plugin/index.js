const path = require('node:path');

module.exports = function (stylus) {
    stylus.import(path.join(__dirname, './theme.styl'));
}