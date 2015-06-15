var Vue = require('vue')

var Resource = require('vue-resource')
Vue.use(Resource)
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

var Router = require('director').Router
var app = new Vue(require('./app.vue'))
var router = new Router()

 
router.on('dashboard', function (page) {
  window.scrollTo(0, 0)
  app.view = 'dashboard-view'
})
 
router.configure({
  notfound: function () {
    router.setRoute('dashboard')
  }
})
 
router.init('dashboard')