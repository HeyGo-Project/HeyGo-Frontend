<template>
  <div class="container">
    <div class="container">
      <div class="row py-5 mt-4 align-items-center">
        <!-- Registeration Form -->
        <div class="col-md-7 col-lg-6 ml-auto">
          <form action="#" @submit.prevent="signIn">
            <div class="row">
              <!-- Email Address -->
              <div class="input-group col-lg-12 mb-4">
                <div class="input-group-prepend">
                  <span
                      class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-envelope text-muted"></i>
                  </span>
                </div>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    class="form-control bg-white border-left-0 border-md"
                    required
                    v-model="email"
                />
              </div>

              <div class="input-group col-lg-12 mb-4">
                <div class="input-group-prepend">
                  <span
                      class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-lock text-muted"></i>
                  </span>
                </div>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="form-control bg-white border-left-0 border-md"
                    maxlength="16"
                    minlength="6"
                    required
                    v-model="password"
                />
              </div>
              <!-- Submit Button -->
              <div class="form-group col-lg-12 mx-auto mb-0" >
                <button class="btn btn-primary btn-block py-2">
                  <span class="font-weight-bold">Login</span>
                </button>
              </div>
              <!-- Already Registered -->
              <div class="text-center w-100">
                <p class="text-muted font-weight-bold">
                  Don't have an account?
                  <a href="#" class="text-primary ml-2">Register</a>
                </p>
              </div>
            </div>
          </form>
        </div>
        <!-- For Demo Purpose -->
        <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
          <img
              src="../../assets/login.svg"
              alt=""
              class="img-fluid mb-3 d-none d-md-block"
          />
          <h1>Login to HeyGO </h1>
          <p class="font-italic text-muted mb-0">
            Open the way to a new world with HeyGo
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      email: '',
      password: '',
    }
  },
  methods:{
    signIn(){
      this.$store.dispatch('retrieveToken', {
        email: this.email,
        password: this.password,
      }).then(response =>{
              this.$router.push('/profile')
          })
    }
  }
}
</script>

<style scoped>
.container{
  margin-top: 70px;
}
.form-control:not(select) {
  padding: 1.5rem 0.5rem;
}

select.form-control {
  height: 52px;
  padding-left: 0.5rem;
}

.form-control::placeholder {
  color: #ccc;
  font-weight: bold;
  font-size: 0.9rem;
}
.form-control:focus {
  box-shadow: none;
}
</style>
