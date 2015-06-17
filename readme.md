## Laravel + Vue.js Basic Boilerplate

I created this repository in an attempt to create a basic boilerplate for a simple dashboard using Laravel + Vue.js and of course to help me understand and practice Vue.js.

This is the first time I am using Vue, and is also the first time I create a repository on Github, suggestions are most welcome, and I hope to count on your collaboration.

**I can't write very well in English, so I'm using the google translator to help me**

### Installation

```sh
$ git clone https://github.com/kuroski/Laravel-Vue-Boilerplate.git
$ cd Laravel-Vue-Boilerplate
$ cp .env.example .env
$ composer update
$ php artisan key:generate
$ touch storage/database.sqlite
$ [sudo] npm install
$ bower install (if not work use "sudo bower install --allow-root")
$ php artisan migrate
$ php artisan db:seed
$ gulp
$ php artisan serve
```

**Or use Homestead xD**

Login: john@doe.com
Password: secret

### Introduction

Everything was done the way to use the Vue as quickly as possible, so I'm using sqlite and php artisan serve to speed up.

An extension was installed for the elixir browserify in order to use the **Vueify:**

> Browserify transform for single-file Vue components

1. In **./gulpfile.js** I'm just compressing all the necessary assets and I am using the extension of browserify to transform our **./resources/assets/js/main.js** script.

2. In the **./app/Http/routes.php** file we just have the login and logout basic routes, and our root.

3. On **./resources/views/home.blade.php** whe have our master view, I am importing all the assets and putting the application root node ``` <div id="app"></div> ```

4. All the Vue stuff is in the **./resources/assets/js** folder.

### Vue Stuff

I'm using the vue-resource package for requests to the backend.
And I'm using the director for routes.

``` 
// main.js

var Vue = require('vue')

// Import vue-resource and configure to use the csrf token in all requests, in which I put him in a meta tag in home.blade.php
var Resource = require('vue-resource')
Vue.use(Resource)
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

// Define our routes
var Router = require('director').Router
var app = new Vue(require('./app.vue'))
var router = new Router()

router.on('login', function (page) {
  window.scrollTo(0, 0)
  app.view = 'login-view'
})
 
router.on('dashboard', function (page) {
  window.scrollTo(0, 0)
  app.view = 'dashboard-view'
})
 
router.configure({
  notfound: function () {
    router.setRoute('dashboard')
  },

  after: function() {
    // Check if the user is logged for each request
    var route = window.location.hash.slice(2)
        
    if (route != 'login' && !app.isLoggedIn)
      window.location = "#/login"
  }
})
 
router.init('login')
```

**storage.js** is just a helper to save localStorage variables

``` 
// app.vue
```

### Todo's

- [x] Finish all the basic structure (Basic routes + Main view + Gulp + Bower + Basic dashboard layout)
- [x] Create the basic login system
- [x] Logging out
- [x] Fade transition between components
- [ ] Finish Readme
- [ ] Create a page load indicator
- [ ] Create a session on the dashboard for managing users
- [ ] Check the application security
- [ ] Learn how to use TDD with Vue
- [ ] Improve the backend (The way it is now is faster to do, so then I have to improve everything)
- [ ] Optimize all
- [ ] **Build a branch or a new repo of this dashboard using API + token authentication (jwt-auth)**

### References

[FezVrasta/bootstrap-material-design] - Material design theme for Bootstrap 3

[IronSummitMedia/startbootstrap-sb-admin-2] - A free, open source, Bootstrap admin theme created by Start Bootstrap

[vuejs/vue-resource] - Resource component for Vue.js

[vuejs/vueify] - Browserify transform for single-file Vue components

[vuejs/vue-hackernews] - HackerNews clone with Vue.js

[flatiron/director] - A tiny and isomorphic URL router for JavaScript

[skrajewski/laravel-elixir-browserify] - Laravel Elixir Browserify Extension

[The Vast World of Vue.js] - **Laracasts Serie =DD**

[Vue.js] - Vue.js official website / documentation / api

[Laravel] - Laravel official website / documentation / api

[FezVrasta/snackbarjs] - Create Material Design snackbars and toasts with ease.

[jashkenas/underscore] - JavaScript's utility _ belt

License
----

MIT

[FezVrasta/bootstrap-material-design]:https://github.com/FezVrasta/bootstrap-material-design
[IronSummitMedia/startbootstrap-sb-admin-2]:https://github.com/IronSummitMedia/startbootstrap-sb-admin-2
[vuejs/vue-resource]:https://github.com/vuejs/vue-resource
[vuejs/vueify]:https://github.com/vuejs/vueify
[vuejs/vue-hackernews]:https://github.com/vuejs/vue-hackernews
[flatiron/director]:https://github.com/flatiron/director
[skrajewski/laravel-elixir-browserify]:https://github.com/skrajewski/laravel-elixir-browserify
[The Vast World of Vue.js]:https://laracasts.com/series/learning-vuejs
[Vue.js]:http://vuejs.org/
[Laravel]:http://laravel.com/docs/5.1
[FezVrasta/snackbarjs]:https://github.com/FezVrasta/snackbarjs
[jashkenas/underscore]:https://github.com/jashkenas/underscore
