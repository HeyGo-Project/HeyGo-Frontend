<template>
  <div>
    <div class="container bootstrap snippets bootdey">
      <div class="row">
        <ul class="user-profile-card col-md-3">
          <div style=":background-image: url(imgUrl) ">
            <img
              src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg"
              class="image--cover"
              alt=""
            />
          </div>
          <h5>Alisher Zharmukhambetov</h5>
          <p>23087@iitu.edu.kz</p>
          <p></p>
          <div
            class="user-nav nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >Profile</a
            >
            <a
              class="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >Edit</a
            >
          </div>
        </ul>

        <div class="tab-content  col-md-2">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
              <h1>Profile</h1>

              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                luk
              </div>
            </div>


        </div>

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
      imgUrl:
        "https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg"
    };
  },
  methods() {}
};
</script>


<style scoped lang="scss" > .user-nav {
  margin-bottom: 15px;
}

.tab-content {
  alignment: right;
  margin-left: 50px;
}

.user-profile-card {
  border: 2px solid #f2f2f2;
  border-radius: 5px;
}

.row {

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
</style>
