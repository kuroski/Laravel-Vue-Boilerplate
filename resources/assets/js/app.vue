<style lang="less">
</style>

<template>
  <login v-if="!isLoggedIn"></login>

  <div v-if="isLoggedIn">
    <sidebar></sidebar>

    <div id="page-wrapper">
    Olá
    <!-- <div v-component="{{view}}" v-with="params:params" v-transition></div> -->
    </div>
  </div>


  <pre>{{$data | json 4}}</pre>
</template>

<script>
var storage = require('./storage')

module.exports = {
  el: '#app',

  components: {
    'sidebar': require('./views/sidebar.vue'),
    'login': require('./views/login.vue')
  },

  data: {
    view: '',
    isLoggedIn: false
  },

  ready: function() {
      console.log(storage.fetchArray('credentials'));
  },

  events: {
    'login:success': function () {
      this.isLoggedIn = true;
      console.log(storage.fetchArray('credentials'));
    },

    'login:send': function(credentials) {
      this.$http.post('/login', credentials, function (data, status, request) {

        storage.saveArray('credentials', credentials);
        this.$emit('login:success');
        $.snackbar({content: "Logado com sucesso!", style: 'toast', toggle: 'snackbar'});

      }).error(function (data, status, request) {

        $.snackbar({content: data.message, style: 'toast', toggle: 'snackbar'});

      });
    }
  }
}
</script>