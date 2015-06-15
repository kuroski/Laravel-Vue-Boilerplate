<style lang="less">
#header {
  color: red;
}
</style>

<template>
  <div id="wrapper">
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
  data: {
    view: ''
  },
  components: {
    'sidebar': require('./views/sidebar.vue'),
  }
}
</script>