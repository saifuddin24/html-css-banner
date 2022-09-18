const mix = require('laravel-mix');
// require('dotenv').config();
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .webpackConfig({
        stats: {
            children: true
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader'
                }
            ]
        },
        resolve: {
            extensions: [ '.ts', '.tsx', '.js' ]
        }
    })
    .vue()
    .sass('resources/css/app.scss', 'public/css')
    .options([
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])

    // .sass('resources/css/app.scss', 'public/css');
