<template>
  <div class="main">
    <div class="container" style="margin-top: 100px">
      <div class="container">
        <div class="profile-header">
          <div class="profile-img">
            <img
              src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg"
              alt=""
              width="200"
            />
          </div>
          <div class="profile-nav-info">
            <h3 class="user-name">Alisher Zharmukhambetov</h3>
            <div class="addres">
              <p class="state">Almaty</p>
              <span class="country">Kazakhstan</span>
            </div>
          </div>
          <div class="main-bd">
            <div class="left-side">
              <p class="mobile-no"><i class="fa fa-phone"></i>+77072109620</p>
              <p  class="user-email">
                <i class="fa fa-envelope">alisher.zharm@gmail.com</i>
              </p>
              <div class="user-bio">
                <p class="bio">Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Iste, impedit
                  odit, assumenda mollitia,
                  cupiditate magni eveniet ipsam voluptatibus dolorem
                  in dolore exercitationem quasi molestias
                  illum asperiores tenetur cum neque soluta?</p>
              </div>
              <div class="profile-btn">
                <button class="chatbtn"><i class="fa fa-comment"></i>Feedback</button>
              </div>
              <div class="user-rating">
                <h3 class="rating">4.5</h3>
                <div class="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="right-side">
            <div class="nav">
              <ul>
                <li class="user-review active"></li>
                <li class="user-setting"></li>
              </ul>
            </div>
            <div class="profile-body">
              <div class="profile-review">
                <h1>Profile reviews</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="profile-settings">
                <h1>Profile settings</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  exercitationem maxime molestiae nemo qui. Distinctio facere fugit
                  incidunt iste officia? Adipisci consequuntur dignissimos
                  doloremque iusto nemo quia? Aliquam perferendis, repellendus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "jquery";
export default {
  name: "Profile",
  data() {
    return {
      firstName: "Alisher",
      lastName: "Zharmukhambetov",
      userEmail: "alisher.zharm@gmail.com",
      imgUrl:
        "https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg",
      phoneNumber: "+77072109620"
    };
  },
  methods() {}
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: 0;
}
.main {
  width: 100%;
  text-align: left;
  overflow-x:hidden;
  font-family: "Nunito", sans-serif;
  background: #e9e9e9;
}
.profile-img{
  float: left;
  width: 340px;
  height: 200px;
}
.profile-img img{
  border-radius: 50%;
  height: 230px;
  width: 230px;
  border: 4px solid white;
  position: absolute;
  left: 50px;
  box-shadow: 0 0 10px rgba(0,0,0,.2); /* Параметры тени */
  top:20px;
  z-index: 5;
  background: white;
}
//.profile-header{
//  background: #ffffff;
//  width: 100%;
//  display: flex;
//  height: 190px;
//  position: relative;
//  box-shadow: 0px 3px 4px rgba(0,0,0,.2); /* Параметры тени */
//}
//.profile-nav-info{
//  float:left;
//  flex-direction: column;
//  justify-content: center ;
//  padding-top: 60px;
//}
//.profile-nav-info h3{
// font-variant: small-caps;
//  font-size: 2rem;
//  font-family: sans-serif;
//  font-weight: bold;
//}
//.profile-nav-info .address{
//  display: flex;
//  font-weight: bold;
//  color: #777;
//}
//.profile-nav-info .address p{
//  margin-right: 5px;
//}
//.profile-side{
//  width: 300px;
//  background: white;
//  box-shadow: 0px 3px 5px rgba(0,0,0,.2);
//  padding: 90px 30px 20px;
//  font-family: "Bree Serif",serif;
//  margin-left: 10px;
//  z-index: 99;
//}
//.profile-side p{
//  margin-bottom: 7px;
//  color: #333 ;
//  font-size: 14px;
//}
//.profile-side i{
//   color: #17A2B8;
//}
//.mobile-number i{
//  transform: rotateY(180deg);
//}
//.profile-btn{
//  display: flex;
//}
//.profile-btn i{
//  color: black;
//  margin-right: 5px;
//}
//.createbtn{
//  border:0;
//  padding: 5px;
//  width: 100%;
//  border-radius: 3px;
//  background: #17A2B8;
//  font-family: "Bree Serif", sans-serif;
//  margin: 5px 2px;
//}
</style>
