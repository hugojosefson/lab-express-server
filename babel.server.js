require('babel-polyfill');

require('babel-core/register')({
    only: /src/,
    presets: ['es2015']
});

if (require('is-production')() || require('piping')({hook: true, includeModules: false})) {
    try {
        require('./src/server');
    } catch (error) {
        console.error(error.stack);
    }
}
