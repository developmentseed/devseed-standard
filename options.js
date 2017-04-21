var eslint = require('eslint')
var path = require('path')
var pkg = require('./package.json')

module.exports = {
  bugs: pkg.bugs.url,
  cmd: 'devseed-standard',
  eslint: eslint,
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  },
  homepage: pkg.homepage,
  tagline: 'Development Seed\'s Standard JavaScript Style',
  version: pkg.version
}
