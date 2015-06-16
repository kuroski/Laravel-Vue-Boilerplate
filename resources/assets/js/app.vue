<style lang="less">
</style>

<template>
  <login v-if="!isLoggedIn"></login>

  <div v-if="isLoggedIn">
    <sidebar></sidebar>

    <div id="page-wrapper">
     a 
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
    var credentials = storage.fetchArray('credentials');
    console.log(credentials);
    if (_.isObject(credentials) && !_.isEmpty(credentials))
      this.$emit('login:send', credentials);
  },

  events: {
    'login:success': function () {
      this.isLoggedIn = true;
      // console.log(storage.fetchArray('credentials'));
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