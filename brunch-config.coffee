exports.config =
  # See http://brunch.io/#documentation for docs.
  npm:
    enabled: true
    globals:
      Reflect: 'es7-reflect-metadata/dist/browser'
  files:
    javascripts:
      joinTo:
        'vendor.js': /^(app\/vendor)|(node_modules)/
        'main.js': /^app\/(?!vendor)/
    stylesheets:
      joinTo: 'app.css'
    templates:
      joinTo: 'app.js'
  plugins:
    brunchTypescript:
      emitDecoratorMetadata: true
      experimentalDecorators: true