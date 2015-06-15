var Vue = require('vue')
var Router = require('director').Router
var app = new Vue(require('./app.vue'))
var router = new Router()
 
router.on('/', function (page) {
  window.scrollTo(0, 0)
  app.view = 'dashboard-view'
})
 
router.configure({
  notfound: function () {
    router.setRoute('/')
  }
})
 
router.init('/')