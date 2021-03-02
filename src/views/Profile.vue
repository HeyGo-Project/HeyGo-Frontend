<template>
  <div class="container">
    <div class="row">
        <ul class="user-profile-info col-md-3">
          <div style=":background-image: url(imgUrl) ">
            <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" class="image--cover" alt="">
          </div>
          <h5 >Alisher Zharmukhambetov</h5>
          <p>23087@iitu.edu.kz</p>
          <p></p>
          <div class="user-nav nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</a>
            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Edit</a>
          </div>
        </ul>
      </div>



<!--    <div class="row">-->

<!--      <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" class="image&#45;&#45;cover" alt="">-->
<!--      <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>-->
<!--      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>-->
<!--      <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>-->
<!--      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>-->
<!--    </div>-->
<!--      <div class="tab-content" id="v-pills-tabContent">-->
<!--        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><p>asdsadsad</p></div>-->
<!--        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>-->
<!--        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>-->
<!--        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>-->
<!--      </div>-->
      <div class="user-feed col-md-9">

      </div>


  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      imgUrl: "https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg"
    };
  },
  methods() {}
};
</script>

<style scoped lang="scss">
.user-nav{
  margin-bottom: 15px;
}
.user-menu-pills{
}
.user-menu {
  margin-top: 100px;
  border: solid 1px;
  border-radius: 10px;
}
.wrapper {
  padding: 100px;
}
.user-profile-info{
  border: 2px solid #f2f2f2;
  border-radius: 5px;
  margin-top: 90px;
}
.image--cover {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 10px;
  alignment: center;
  object-fit: cover;
  object-position: center right;
}
.nav-link > .active > a {
  color: red;
  background-color: chartreuse;
}
</style>
