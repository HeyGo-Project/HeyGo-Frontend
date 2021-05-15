<template>
  <div class="profile-settings container h-100">
    <h3 style="alignment: center; margin-bottom: 10px">User Settings</h3>
    <form>
      <div class="row">
        <div class="col-md-12">
          <textarea
            name="legend"
            class="legend"
            placeholder="Tell everyone more about you..."
            id="legend"
            cols="83"
            rows="5"
          >
          </textarea>
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            :value="firsName"
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            :value="lastName"
          />
        </div>

        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            :value="email"
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Passport Number"
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Gender"
            :value="gender"
            disabled
          />
        </div>

      </div>
    </form>
    <button class="updateProfile btn btn-primary ">
      Upload
    </button>
    <hr>

  </div>
</template>

<script>
export default {
  data() {
    return {
      firsName: this.$store.state.user.firstName,
      lastName: this.$store.state.user.lastName,
      email: this.$store.state.user.email,
      gender: "Male",
    };
  }
};
</script>

<style scoped lang="scss">
.profile-settings {
  alignment: center;
  width: 800px;

}

.col-md-6 {
  margin-bottom: 15px;
}

@media (max-width: 400px) {
  .profile-settings {
    width: 300px;
  }
  .legend {
    width: 270px;
  }
  .dropdown {
    margin-left: 90px;
  }
  .updateProfile {
    alignment: center;
    margin-bottom: 10px;
    margin-left: 90px;
  }
}
</style>
