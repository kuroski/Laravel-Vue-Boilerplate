<style lang="less">
</style>

<template>
<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
  <!-- Navigation -->
  <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.html">Admin panel</a>
  </div>
  <!-- /.navbar-header -->

  <ul class="nav navbar-top-links navbar-right">
      <!-- /.dropdown -->
      <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
              <i class="fa fa-bell fa-fw"></i>  <i class="fa fa-caret-down"></i>
          </a>
          <ul class="dropdown-menu dropdown-alerts">
              <li>
                  <a href="#">
                      <div>
                          <i class="fa fa-comment fa-fw"></i> New Comment
                          <span class="pull-right text-muted small">4 minutes ago</span>
                      </div>
                  </a>
              </li>
          </ul>
          <!-- /.dropdown-alerts -->
      </li>
      <!-- /.dropdown -->
      <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
              <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
          </a>
          <ul class="dropdown-menu dropdown-user">
              <li>
                <a href="#" v-on="click: this.$dispatch('login:logout')"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
              </li>
          </ul>
          <!-- /.dropdown-user -->
      </li>
      <!-- /.dropdown -->
  </ul>
  <!-- /.navbar-top-links -->

  <div class="navbar-default sidebar" role="navigation">
      <div class="sidebar-nav navbar-collapse">
          <ul class="nav" id="side-menu">
              <li>
                  <a href="#/dashboard"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
              </li>
              <li>
                  <a href="#/users"><i class="fa fa-user fa-fw"></i> Users</a>
              </li>
          </ul>
      </div>
      <!-- /.sidebar-collapse -->
  </div>
  <!-- /.navbar-static-side -->
</nav>
</template>

<script>
module.exports = {
  data: function () {
    return {
    }
  }
}
</script>