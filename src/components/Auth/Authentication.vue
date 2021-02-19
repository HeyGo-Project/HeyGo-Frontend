<template>
  <div class="login">
    <!-- Modal -->
    <div
      class="modal fade "
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
                  <label for="name">Your name</label>
                  <input
                    type="text"
                    v-model="name"
                    class="form-control"
                    id="name"
                    placeholder="Your nice name"
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
                  />
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    id="retype-password"
                    placeholder="Re-type your password"
                  />
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" @click="register">
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
export default {
  name: "Auth",

  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      birthDate: ""
    };
  },
  validations: {
    email: {
      email: { email, required }
    },
    password: {
      password: { required, minLength: minLength(6), maxLength: maxLength(16) }
    }
  },
  methods: {
    submitHandler() {
      if (this.$v.invalid) {
        this.$v.$touch();
        return;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.modal-dialog {
  width: 400px;
}
</style>
