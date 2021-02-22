<template>
  <div class="card" style="align-content: center">
    <h3 class="card-header">Register to HeyGo</h3>
    <div>
      <div class="card-body d-flex justify-content-center">
        <form class="w-50">
          <div class="form-check">
            <div class="form-group">
              <label>First name</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group ">
              <label>Second name</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group ">
              <label>email</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group ">
              <label>Password</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group">
              <label>confirm password</label>
              <input type="text" class="form-control">
            </div>
          </div>
        </form>
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
  name: "Registration",
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
    email: { email, required },
    password: { required, minLength: minLength(6), maxLength: maxLength(16) }
  }
};
</script>

<style scoped></style>
