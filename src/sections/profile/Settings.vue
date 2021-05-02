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
<!--    TODO: Закончить-->
    <div class="instruction">
      <h2>To become a must to the following:</h2>
      <h5>1. Upload your  certificate of criminal record</h5>
      <div class="criminal-file custom-file">
        <input type="file" class="custom-file-input" id="inputGroupFile03">
        <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
      </div>
      <h5 style="margin-top: 15px">2. A document proving your psychological stability</h5>
      <div class="psycho-file custom-file">
        <input type="file" class="custom-file-input" >
        <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
      </div>
      <div class="accept-terms">
        <p >After sending this administration will check provided information</p>
      </div>
    </div>
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
