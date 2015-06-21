var Vue = require('vue')

/**
 * Resource default configurations
 */

var Resource = require('vue-resource')
Vue.use(Resource)
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
Vue.http.options.beforeSend = function() {
  app.$broadcast('loading:show')

  setTimeout(function(){ app.$broadcast('loading:hide') }, 2000);
}

/**
 * Routes
 */

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
 
router.on('users', function (page) {
  window.scrollTo(0, 0)
  app.view = 'user-view'
})
 
router.configure({
  notfound: function () {
    router.setRoute('dashboard')
  },

  after: function() {
    var route = window.location.hash.slice(2)

    if (route != 'login' && !app.isLoggedIn)
      window.location = "#/login"
  }
})
 
router.init('login')
