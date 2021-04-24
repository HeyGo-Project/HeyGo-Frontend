<template>
  <div class="container">
    <!-- Navbar-->
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light py-3">
        <div class="container">
          <!-- Navbar Brand -->
          <a href="#" class="navbar-brand">
            <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1571398888/Group_1514_tjekh3_zkts1c.svg"
                alt="logo"
                width="150"
            />
          </a>
        </div>
      </nav>
    </header>

    <div class="container">
      <div class="row py-5 mt-4 align-items-center">
        <!-- For Demo Purpose -->
        <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
          <img
              src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg"
              alt=""
              class="img-fluid mb-3 d-none d-md-block"
          />
          <h1>Create an Account</h1>
          <p class="font-italic text-muted mb-0">
            Open the way to a new world with HeyGo
          </p>

        </div>

        <!-- Registeration Form -->
        <div class="col-md-7 col-lg-6 ml-auto">
          <form action="#">
            <div class="row">
              <!-- First Name -->
              <div class="input-group col-lg-6 mb-4">
                <div class="input-group-prepend">
                  <span
                      class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-user text-muted"></i>
                  </span>
                </div>
                <input
                    id="firstName"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    class="form-control bg-white border-left-0 border-md"
                />
              </div>

              <!-- Last Name -->
              <div class="input-group col-lg-6 mb-4">
                <div class="input-group-prepend">
                  <span
                      class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-user text-muted"></i>
                  </span>
                </div>
                <input
                    id="lastName"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    class="form-control bg-white border-left-0 border-md"
                />
              </div>

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
                />
              </div>

              <!-- Phone Number -->
              <div class="input-group col-lg-12 mb-4">
                <div class="input-group-prepend">
                  <span
                      class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-phone-square text-muted"></i>
                  </span>
                </div>

                <input
                    v-model="phone"
                    id="phoneNumber"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    class="form-control bg-white border-md border-left-0 pl-3"
                />
              </div>

              <div class="input-group col-lg-12 mb-4">
                <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-venus-mars text-muted"></i>
                            </span>
                </div>
                <select id="job" name="jobtitle" class="form-control custom-select bg-white border-left-0 border-md">
                  <option value="">Choose your gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>


              <!-- Password -->
              <div class="input-group col-lg-6 mb-4">
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
                    minlength="6"
                    maxlength="16"
                    class="form-control bg-white border-left-0 border-md"
                />
              </div>
              <!-- Password Confirmation -->
              <div class="input-group col-lg-6 mb-4">
                <div class="input-group-prepend">
                  <span
                      class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-lock text-muted"></i>
                  </span>
                </div>
                <input
                    id="passwordConfirmation"
                    type="text"
                    name="passwordConfirmation"
                    placeholder="Confirm Password"
                    minlength="6"
                    maxlength="16"
                    class="form-control bg-white border-left-0 border-md"
                />
              </div>

              <!-- Submit Button -->
              <div class="form-group col-lg-12 mx-auto mb-0" >
                <a href="#" class="btn btn-primary btn-block py-2">
                  <span class="font-weight-bold">Create your account</span>
                </a>
              </div>
              <!-- Already Registered -->
              <div class="text-center w-100">
                <p class="text-muted font-weight-bold">
                  Already Registered?
                  <a href="#" class="text-primary ml-2">Login</a>
                </p>
              </div>
            </div>
          </form>
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
      phone: '',
    }
  },
  methods:{
    check (){
      alert(this.phone)
    }
  }
};
</script>

<style scoped>
body {
  min-height: 100vh;
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
