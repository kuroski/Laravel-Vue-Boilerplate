<style lang="less">
</style>

<template>
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">

          <h1 class="page-header">Users</h1>

          <ul>
            <li v-repeat="users">
              <strong>Name:</strong>{{ name }}
            </li>
          </ul>

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
      users: ''
    }
  },

  ready: function() {
      this.$http.get('/users', this.credentials, function (data, status, request) {

        $.snackbar({content: data.message, style: 'toast', toggle: 'snackbar'});
        this.users = JSON.parse(data.data.users);

        console.log(data);

      }).error(function (data, status, request) {

        $.snackbar({content: data.message, style: 'toast', toggle: 'snackbar'});

      });
  }
}
</script>