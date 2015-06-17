<style lang="less">
</style>

<template>
  <sidebar-view></sidebar-view>

  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">

          <h1 class="page-header">Blank</h1>

        </div>
        <!-- /.col-lg-12 -->
      </div>
    <!-- /.row -->
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
    }
  },

  components: {
    'sidebar-view': require('./sidebar-view.vue')
  },
}
</script>