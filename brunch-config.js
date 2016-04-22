exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^node_modules/,
        'main.js': /^app/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'main.js'
    }
  }
};
