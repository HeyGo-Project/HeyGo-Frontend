<template>
  <div class="login">
    <div
      class="modal fade"
      id="login"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <ul
              class="nav nav-fill nav-pills mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                  >Login</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-register-tab"
                  data-toggle="pill"
                  href="#pills-register"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                  >Signup</a
                >
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <form
                class="tab-pane fade show active"
                id="pills-login"
                role="form"
                aria-labelledby="pills-login-tab"
                @submit.prevent="submitHandler"
              >
                <h5 class="text-center">Login Please</h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    v-model.trim="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    :class="{
                      invalid:
                        ($v.email.$dirty && !$v.email.required) ||
                        ($v.email.$dirty && !$v.email.email)
                    }"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    v-model.trim="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" type="submit">Login</button>
                </div>
              </form>

              <div
                class="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="pills-register-tab"
              >
                <h5 class="text-center">Create New Account</h5>

                <div class="form-group">
                  <label for="firstName">Your first name</label>
                  <input
                    type="text"
                    v-model="firstName"
                    class="form-control"
                    id="firstName"
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="lastName">Your last name</label>
                  <input
                    type="text"
                    v-model="lastName"
                    class="form-control"
                    id="lastName"
                    placeholder="Enter last name"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    v-model="email"
                    class="form-control"
                    id="email"

                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="birth-date">Birth date</label>
                  <input
                    type="date"
                    v-model="birthDate"
                    class="form-control"
                    id="birth-date"
                    placeholder="Birth date"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="password">Re-type Password</label>
                  <label for="retype-password"></label
                  ><input
                    type="password"
                    v-model="retypePassword"
                    class="form-control"
                    id="retype-password"
                    placeholder="Re-type your password"
                    required
                  />
                </div>
                <div class="form-group">
                  <button
                    class="btn btn-primary"
                    type="submit"
                    @click="register"
                  >
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  email,
  required,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
import {fb} from "../../firebase";
export default {
  name: "Auth",

  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: null,
      password: null,
      birthDate: "",
      retypePassword: "",

    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6), maxLength: maxLength(16) }
  },
  methods: {
    submitHandler() {
      if (this.$v.invalid) {
        this.$v.$touch();
        return;
      }
    },

    register() {
      fb
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          // Signed in
          let user = userCredential.user;
          $("#login").modal('hide')
          this.$router.replace('profile')
          // ...
        })
        .catch(error => {
          let errorCode = error.code;
          let errorMessage = error.message;
          // ..
        });
    }
  }
};
</script>

<style scoped lang="scss">
.modal-dialog {
  width: 400px;
}
</style>
