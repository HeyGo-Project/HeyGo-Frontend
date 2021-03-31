<template>
  <div class="profile-review">
    <div class="profile-review-top">
      <div class="profile-img col-md-2">
        <img :src="imgUrl" alt="" width="120px" height="120" />
      </div>
      <div class="user-name profile-img col-md-6">
        <p>{{ name + " " + surname }}</p>
      </div>
      <div class="user-rating">
        <p>User Rating:</p>
        <div class="rate">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Reviews",
  data() {
    return {
      imgUrl:
        "https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg",
      name: "Alisher",
      surname: "Zharmukhambetov"
    };
  }
};
</script>

<style scoped lang="scss">
.profile-review {
  background: white;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);

  width: 760px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
}
.profile-review-top {
  display: flex;

}
.profile-img {
  margin-left: 20px;
}
.profile-img img {
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 50%;

  left: 50px;
  top: 50px;
  z-index: 5;
  background: white;
}
.user-name {
  margin-top: 20px;
  float: left;
  flex-direction: column;
  font-family: Nunito, serif;
  color: black;
  font-weight: bold;
}
.user-rating {
  margin-top: 20px;
  display: flex;
}
.rate {
  margin-left: 10px;
}
.user-comment{
  margin-left: 200px;
  margin-right: 30px;
  margin-bottom: 150px;
}
</style>
