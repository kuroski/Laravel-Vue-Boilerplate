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
module.exports = {
  el: '#app',

  components: {
    'sidebar': require('./views/sidebar.vue'),
    'login': require('./views/login.vue'),
  },

  data: {
    view: '',
    isLoggedIn: false
  },

  events: {
    'login:success': function () {
      this.isLoggedIn = true;
    }
  },
}
</script>