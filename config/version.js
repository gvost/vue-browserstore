const fs = require('fs')
const pack = require('../package.json')

// update installation.md
const installation = fs
  .readFileSync('./gitbook/installation.md', 'utf-8')
  .replace(
    /https:\/\/unpkg\.com\/vue-browserstore@[\d.]+.[\d]+\/dist\/vue-browserstore\.js/,
    'https://unpkg.com/vue-browserstore@' + pack.version + '/dist/vue-browserstore.js.'
  )
fs.writeFileSync('./gitbook/installation.md', installation)
