var elixir = require('laravel-elixir');
var vueify = require('laravel-elixir-browserify').init("vueify");
 
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */
 
elixir(function(mix) {

    mix.vueify('main.js', {insertGlobals: true, transform: "vueify", output: "public/assets/vue",});
    
    mix.copy('bower_components/startbootstrap-sb-admin-2/less', 'resources/assets/less/sb');
    mix.copy('bower_components/bootstrap-material-design/less', 'resources/assets/less/material');
    mix.copy('bower_components/bootstrap-material-design/dist/fonts', 'public/assets/fonts');
    mix.copy('bower_components/font-awesome/fonts', 'public/assets/fonts');
    mix.copy('bower_components/bootstrap/dist/fonts', 'public/assets/fonts');
 
    mix.less('custom.less');
 
    mix.styles([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/font-awesome/css/font-awesome.min.css',
        'bower_components/snackbarjs/dist/snackbar.min.css',
        'bower_components/metisMenu/dist/metisMenu.min.css',
        'bower_components/startbootstrap-sb-admin-2/dist/css/timeline.css',
        'bower_components/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css',
        'public/css/app.css'
    ], 'public/assets/css', './');
 
    mix.scripts([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/underscore/underscore-min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/moment/moment.js',
        'bower_components/moment/locale/pt-br.js',
        'bower_components/bootstrap-material-design/dist/js/ripples.min.js',
        'bower_components/bootstrap-material-design/dist/js/material.min.js',
        'bower_components/snackbarjs/dist/snackbar.min.js',
        'bower_components/metisMenu/dist/metisMenu.js',
        'bower_components/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js'
    ], 'public/assets/js', './');
});