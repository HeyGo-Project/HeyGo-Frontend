<template>
  <div class="profile-settings container h-100">
    <h3 style="alignment: center">User Settings</h3>

    <form>
      <div class="row">
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="First name">
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Last name">
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Phone number">
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Email" >
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Passport Number">
        </div>

        <div class="dropdown col-md-6">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Male
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Female</a>
            <a class="dropdown-item" href="#">Other</a>
          </div>
        </div>
      </div>
    </form>
    <button class="updateProfile btn btn-primary ">
      Sign up
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.profile-settings{
  alignment: center;
  width: 800px;
}
.col-md-6{
  margin-bottom: 20px;
}

@media (max-width: 400px) {
  .profile-settings{
    width: 300px;
  }
  .dropdown{
    margin-left: 90px;
  }
  .updateProfile{
    alignment: center;
    margin-bottom: 10px;
    margin-left: 90px;
  }
}
</style>
