<style lang="less">
.fade-transition {
  display: block;
  position: relative;
  opacity: 1;
  transition: opacity .25s ease-in-out;
  -moz-transition: opacity .25s ease-in-out;
  -webkit-transition: opacity .25s ease-in-out;
}

.fade-enter, .fade-leave {
  opacity: 0;
}
</style>

<template>
  <loader></loader> 

  <component 
    is="{{view}}"
    v-transition="fade"
    transition-mode="out-in"
  ></component>


  <pre>{{$data | json 4}}</pre>
</template>

<script>
var storage = require('./storage')

module.exports = {
  el: '#app',

  components: {
    'login-view': require('./views/login-view.vue'),
    'dashboard-view': require('./views/dashboard-view.vue'),
    'loader': require('./components/loader.vue')
  },

  data: {
    view: '',
    isLoggedIn: false
  },

  ready: function() {
    if (this.view != 'login-view' && !this.isLoggedIn)
      window.location = "#/login";
  },

  events: {
    'login:logout': function () {
      this.$http.post('/logout', function (data, status, request) {

        this.isLoggedIn = false;
        storage.saveArray('credentials', []);
        $.snackbar({content: data.message, style: 'toast', toggle: 'snackbar'});

        window.location = "#/login";

      }).error(function (data, status, request) {

        $.snackbar({content: data.message, style: 'toast', toggle: 'snackbar'});

      });
    },

    'login:success': function() {
      this.isLoggedIn = true;
    }
  }
}
</script>