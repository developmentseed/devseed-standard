const fs = require('fs')
const path = require('path')

const eslint = require('eslint')
const pkg = require('./package.json')

module.exports = {
  bugs: pkg.bugs.url,
  cmd: 'devseed-standard',
  eslint: eslint,
  eslintConfig: {
    parser: 'babel-eslint',
    useEslintrc: true,
    configFile: path.join(__dirname, 'eslintrc.json')
  },
  homepage: pkg.homepage,
  tagline: 'Development Seed\'s Standard JavaScript Style',
  version: pkg.version,
  parseOpts: function (opts, packageOpts, rootDir) {
    try {
      const files = fs.readdirSync(rootDir).filter((file) => file.includes('.eslintrc'))
      if (files[0]) {
        opts.eslintConfig.configFile = files[0]
      }
    } catch (err) {
      // ignore
    }

    return opts
  }
}
