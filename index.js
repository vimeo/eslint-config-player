/* eslint-env node */
var fs = require('fs');
var path = require('path');
var stripComments = require('strip-json-comments');

var file = fs.readFileSync(path.join(__dirname, '.eslintrc'), 'utf8');
module.exports = JSON.parse(stripComments(file));
