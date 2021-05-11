<template>
  <div class="navbar">
    <nav
      class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light"
    >
      <div class="container" >
        <router-link class="navbar-brand" to="/">HeyGo</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-for="navs in nav" :key="navs.text">
              <router-link :to="navs.link" class="nav-link">
                {{ navs.text }}
              </router-link>
            </li>
          </ul>
          <router-link :to="loginPath" class="nav-link">
            <button v-if="!loggedIn" type="button" class="btn btn-outline-success my-2 mr-sm-2" data-toggle="modal" >
              Sign in
            </button>
          </router-link>
          <router-link :to="registerPath" class="nav-link">
            <button v-if="!loggedIn" type="button" class="btn btn-outline-primary my-2 mr-sm-2" data-toggle="modal">
              Sign up
            </button>
          </router-link>
          <router-link :to="logoutPath" class="nav-link">
          <button v-if="loggedIn" type="button" class="btn btn-outline-danger my-2 mr-sm-2" data-toggle="modal">
            Sign out
          </button>
          </router-link>
        </div>

      </div>

    </nav>

  </div>

</template>

<script>
export default {
  name: "Navbar",
  computed:{
    loggedIn(){
       return this.$store.getters.loggedIn
    }
  },
  data() {
    return {
      loginPath:'/login',
      registerPath:'/registration',
      logoutPath: '/logout',
      nav: [
        {
          link: "/profile",
          text: "Profile"
        },
        {
          link: "/about",
          text: "About"
        },
      ]
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (min-width: 992px) {
  .navbar.custom-nav {
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: #fff !important;
  }
}
</style>
