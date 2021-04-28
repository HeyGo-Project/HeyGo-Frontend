<template>
  <div class="main">
    <div class="container" style="margin-top: 100px">
      <div class="profile-header">
        <div class="profile-img ">
          <img :src="imgUrl" alt="" width="200px" />
        </div>
        <div class="profile-nav-info">
          <h3 class="user-name-comment">{{ firstName + " " +  lastName}}</h3>
          <div class="address">
            <p class="state">Almaty,</p>
            <span class="country">Kazakhstan</span>
          </div>
        </div>
      </div>

      <div class="main-bd">
        <div class="left-side">
          <div class="profile-side">

            <div class="user-email">
              <i class="fa fa-envelope" style="margin-right: 10px"></i>{{ email }}
            </div>
            <div class="user-bio">
              <p class="bio">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <button class="createbtn">
              <i class="fa-hand-peace-o"></i>Become a guide
            </button>
            <div class="profile-btn">

              <button class="createbtn">
                <i class="fa fa-comment"></i>Leave a comment
              </button>
            </div>
            <div class="user-rating">
              <h3 class="rating">4.5</h3>
              <div class="rate" >
                <i class="fa fa-star" style="color: #ffda2f;"></i>
                <i class="fa fa-star" style="color: #ffda2f;"></i>
                <i class="fa fa-star" style="color: #ffda2f;"></i>
                <i class="fa fa-star" style="color: #ffda2f;"></i>
                <i class="fa fa-star" style="color: #ffda2f;"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="right-side">
          <div class="nav">
            <ul>
              <li
                v-for="tab in tabs"
                :key="tab"
                @click="selected = tab;"
                :class="['tab-btn', { active: selected === tab }]"
              >
                {{ tab }}
              </li>

            </ul>

          </div>

          <div class="profile-body">
            <component :is="selected"></component>
            <div class="profile-review-top">

            </div>
            <div class="profile-settings">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "jquery";
import Review from "../sections/profile/Review";
import Settings from "../sections/profile/Settings";
export default {
  name: "Profile",
  components: {
    Review,
    Settings
  },
  data() {
    return {
      firstName: this.$store.state.user.firstName,
      lastName: this.$store.state.user.lastName,
      email: this.$store.state.user.email,
      imgUrl:
        "https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg",
      tabs: ["Review", "Settings"],
      selected: "Review"
    };
  },
  computed:{

  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap");

.main {
  width: 100%;
  margin-top: 20px;
  text-align: left;
  overflow-x: hidden;
  font-family: "Nunito", sans-serif;
  background: #e9e9e9;
  margin-bottom: -32px;
}

.rate{
  margin-left: 10px;
  font-size: 25px;
  margin-top: 5px
}

.profile-img {
  float: left;
  width: 340px;
  height: 200px;
}
.profile-img img {
  border-radius: 50%;
  height: 230px;
  width: 230px;
  border: 4px solid white;
  position: absolute;
  left: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Параметры тени */
  top: 20px;
  z-index: 5;
  background: white;
}
.profile-header {
  background: #ffffff;
  width: 100%;
  display: flex;
  height: 190px;
  position: relative;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3); /* Параметры тени */
  border-radius: 15px;
}
.profile-nav-info {
  float: left;
  flex-direction: column;
  justify-content: center;
  padding-top: 60px;
}
.profile-nav-info h3 {
  font-variant: small-caps;
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: bold;
}
.profile-nav-info .address {
  display: flex;
  font-weight: bold;
  color: #777;
}
.profile-nav-info .address p {
  margin-right: 5px;
}
.left-side {
  margin-bottom: 10px;
}
.profile-side {
  width: 300px;
  background: white;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  padding: 90px 30px 20px;
  font-family: "Bree Serif", serif;
  margin-left: 10px;
  z-index: 99;
  border-bottom-left-radius:15px;
  border-bottom-right-radius:15px;
}
.profile-side p {
  margin-bottom: 7px;
  color: #333;
  font-size: 14px;
}
.profile-side i {
  color: #17a2b8;
}
.mobile-number i {
  transform: rotateY(180deg);
}
.profile-btn {
  display: flex;

}
.profile-btn i {
  color: white;
  margin-right: 5px;
}
.createbtn {
  border: 0;
  padding: 5px;
  width: 100%;
  border-radius: 3px;
  background: #01A4B6;
  color:white;
  font-family: "Bree Serif", sans-serif;
  margin: 5px 2px;
}
.main-bd {
  display: flex;
  width: 100%;
}
.createbtn:hover {
  background: rgb(121, 243, 231);
}
.user-rating {
  display: flex;
}
.user-rating h3 {
  font-size: 2.5rem;
  font-weight: 200;
  margin-right: 5px;
  letter-spacing: 1px;
  color: #666;
}
.nav ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  height: 40px;
  background: transparent;
  width: 100%;
  color:#666;
  font-weight: normal;
  padding-right: 50px;
}
.nav ul li {
  padding: 10px;
  width: 100%;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease-in-out;
}
.nav ul li:hover {
  box-shadow: 0px -3px 0px #01A4B6 inset;
  font-weight: bold;
}
.profile-body {
  width: 100%;
  z-index: -1;
}
.tab {
  padding: 20px;
  width: 100%;
  text-align: center;
  display: none;
}
.active {
  box-shadow: 0px -3px 0px #01A4B6 inset;
  font-weight: bold;
}
@media (max-width: 1100px) {
  .profile-side{
    width: 250px;
    padding: 90px 15px 20px;
  }
  .profile-img img{
    height: 200px;
    width: 200px;
    left: 50px;
    top: 50px
  }
}
@media (max-width: 900px) {
  body{
    margin: 0 20px;
  }
  .profile-header{
    display: flex;
    height: 100%;
    flex-direction: column;
    text-align: center;
    padding-bottom: 20px;
  }
  .profile-img {
    float: left;
    width: 100%;
    height: 200px;
  }
  .profile-img img{
    position: relative;
    left: 0;
  }
  .profile-nav-info{
    text-align: center;
  }
  .main-bd{
    flex-direction: column;
    padding-right: 0px;

  }
  .profile-side{
    width: 100%;
    text-align: center;
    padding: 20px;
    margin: 5px 0;
  }
  .profile-nav-info .address{
    justify-content: center;
  }
  .user-rating{
    justify-content: center;
  }
}

@media (max-width: 400px) {
  .main{
    margin: 0 0 -32px;
  }
  .profile-header h3{
    font-size: 1.7rem;
  }
  .profile-header p{
    font-size: .9rem;
  }

}
</style>
