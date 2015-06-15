<style lang="less">
#header {
  color: red;
}
</style>

<template>
  <!-- header -->
  <div id="header">
    Olá mundo
  </div>
  <!-- main view -->
  <!-- <div v-component="{{view}}" v-with="params:params" v-transition></div> -->
</template>

<script>
module.exports = {
  el: '#app',
  data: {
    view: ''
  }
}
</script>