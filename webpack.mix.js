let mix = require('laravel-mix');

mix
    .js('resources/js/application.js', 'public/js')
    .sass('resources/sass/application.scss', 'public/css')
    .options({
        fileLoaderDirs: {
            fonts: 'public/fonts'
        }
    });