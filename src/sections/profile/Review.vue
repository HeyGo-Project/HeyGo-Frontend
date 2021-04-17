<template>
  <div class="review-list" style="margin-bottom: 100px"  >
    <div class="profile-review-top">
      <div class="profile-img col-md-2">
        <img :src="imgUrl" alt="" width="120px" height="120" />
      </div>

      <div class="user-name-comment col-md-6">
        <div class="col-md-12">
          <p>{{ name + " " + surname }}</p>
        </div>
        <div class="user-comment ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ex
            magni officia? Cum dolores libero nisi placeat quia similique unde
            vero. Cum est facilis iste iure laudantium, magni qui velit?
          </p>
        </div>
      </div>

      <div class="user-rating">
        <p>User Rating:</p>
        <div class="rate" style="">
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
      surname: "Zharmukhambetov",
      tabs: ["Review", "Settings"],
    };
  }
};
</script>

<style scoped lang="scss">

.profile-review-top {
  display: flex;
  background: white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  width: auto;
  max-width: 760px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
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
.user-name-comment {
  margin-top: 20px;
  float: left;
  flex-direction: column;
}

.user-name-comment p {
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
  color: #ffda2f;
}
.user-comment {
  padding-right: 60px;
  margin-left: 10px;
  width: 600px;
}

.user-comment p{
  font-weight: normal;
}

@media (max-width: 900px) {
  * {
    margin:0;
    padding:0;
    box-sizing:border-box
  }
  .review-list{
    margin-right: 20px;
  }
  .profile-review-top{
    text-align: center;
    width: auto;
    max-width: 350px;
    display: block;
    margin-left: 20px;
    margin-right: auto;
  }

  .user-comment {
    width: 320px;
    text-align: center;
    margin-right: 20px;
  }

  .profile-img img{
    alignment: center;
    margin-right: 40px;

  }

  .user-name-comment{
    width: 100%;
  }

  .user-rating{
    display: block;
  }

  .user-comment {
    margin-top: 20px;
    margin-right: 1500px;
    float: left;

  }
}
</style>
