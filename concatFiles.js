const fs = require('fs-extra');
const concat = require('concat');

(async function build() {


  await fs.ensureDir('dist/component')

  // correct order is: inline -> styles -> scripts -> vendor -> main
  const files = [
    './dist/inline.bundle.js',
    './dist/polyfills.bundle.js',
    './dist/vendor.bundle.js',
    './dist/main.bundle.js'
  ]

  await concat(files, 'dist/component/angularWebComponentSample.js')
  console.info('WebComponent created successfully!')

})()
