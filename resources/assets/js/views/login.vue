<style lang="less">
</style>

<template>
<div class="container">
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="login-panel panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Faça o seu login</h3>
        </div>
        <div class="panel-body">

          <form role="form" method="POST" v-on="submit: doLogin">
            <fieldset>
              <div class="form-group">
                <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus="" v-model="credentials.email">
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="Senha" name="password" type="password" value="" v-model="credentials.password">
              </div>
              <!-- Change this to a button or input when using this as a form -->
              <input type="submit" class="btn btn-lg btn-success btn-block" value="Login">
            </fieldset>
          </form>
          
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      credentials: {
        email: '',
        password: ''
      } 
    }
  },

  methods: {
    doLogin: function(e) {
      e.preventDefault();

      this.$dispatch('login:send', this.credentials);
    }
  }
}
</script>