<template>
  <div style="align-content: center">
    <h3 class="card-header">Register to HeyGo</h3>
    <div class=" align-content-center">
      <div class="card-body align-content-center">
        <form>
          <div class="form-check">
            <div class="form-group col-md-4">
              <label>First name</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group col-md-4">
              <label>Second name</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group col-md-4">
              <label>email</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group col-md-4">
              <label>Password</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group col-md-4">
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
  name: "Authentication",
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
