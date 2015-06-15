<style lang="less">
</style>

<template>
  <div v-if="!isLoggedIn">
    Você não está logado
  </div>

  <div v-if="isLoggedIn">
    <sidebar></sidebar>

    <div id="page-wrapper">
    Olá
    <!-- <div v-component="{{view}}" v-with="params:params" v-transition></div> -->
    </div>
  </div>
</template>

<script>
module.exports = {
  el: '#app',

  components: {
    'sidebar': require('./views/sidebar.vue'),
  },

  computed: {
    token: function() {
      return localStorage.getItem('token');
    }
  },

  data: {
    view: '',
    isLoggedIn: false
  },

  ready: function() {
    this.$http.post('/login', function (data, status, request) {

      // console.log(data, status, request)

    }).error(function (data, status, request) {
        // handle error
    })
  }
}
</script>