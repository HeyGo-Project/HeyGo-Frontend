<template>
  <body>

  <div class="card-wrapper container-fluid">
    <div class="card-main">
      <!-- card left -->
      <div class="product-imgs">
        <div class="img-display">
          <div class="img-showcase">
            <img id="bigImage" :src="images[0].src" alt="Hotel image">
          </div>
        </div>

        <div class="img-select">
          <div v-for="imgs in images" class="img-item">
            <a href="">
              <img :src="imgs.src" alt="Hotel image" @click="changePhoto(imgs, $event)">
            </a>
          </div>
        </div>

        <div class="product-detail">
          <ul>
            <li style="font-size: 18px; color: #01A4B6">Most favorite facilities</li>
            <li
                v-for="advs in advantages"
            >{{ advs.adv }}
            </li>
          </ul>
        </div>
      </div>

      <!-- card right -->
      <div class="product-content">
        <h2 class="product-title">Hotel Indigo Gran Via</h2>
        <p>{{ location }}</p>
        <div class="product-rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <span>4.7(21)</span>
        </div>


        <div class="product-detail">
          <h2>about: </h2>
          <p>{{ about }}</p>
        </div>

<!--        Later should be casted for vue-->
        <div class="product-prices">
<!--          right side-->
          <div class="prices-details">
            <h5>Luxury</h5>
            <p>*1 night, 2 adults</p>
            <p style="color: black;margin-left: 15px">  Check in: 15 april 2021</p>
            <p style="color: black;margin-left: 15px"> &nbsp;&nbsp;&nbsp;&nbsp; Check out: 16 april 2021</p>
          </div>
<!--          left side-->
          <div class="prices-advantages">
            <ul style="list-style: none">
              <li>No credit card needed!</li>
              <li style="color: black">Advantages:</li>
              <li>29 m²</li>
              <li>free wifi</li>
              <li>Flat-screen TV</li>
              <li>Private bathroom</li>
              <li>Air conditioning</li>
              <li>Minibar</li>
            </ul>
          </div>

          <div class="prices">
            <p style="color: black">Price:</p>
            <p style="color: red;text-decoration: line-through;font-size: 10px">KZT 35,000</p>
            <p style="color: black;font-size: 20px">KZT 28,000</p>
          </div>

        </div>

        <button class="vanilla-btn">
          Reserve
        </button>
      </div>
    </div>
    <div class="comment-section">
<!--      <Reviews/>-->
    </div>
  </div>


  </body>
</template>

<script>
import Reviews from "../sections/profile/Review";

export default {
  name: "Hotel",
  components: {Reviews},
  methods: {
    changePhoto(img, event) {
      let bigImg = document.getElementById("bigImage");
      bigImg.src = img.src;
      event.preventDefault();
    }
  },

  data() {
    return {
      advantages: [
        {adv: "1 swimming pool"},
        {adv: "Airport shuttle"},
        {adv: "Non-smoking rooms"},
        {adv: "Spa and wellness centre"},
        {adv: "good fitness centre"},
        {adv: "Room service"},
        {adv: "Restaurant"}
      ],
      images: [
        {src: "/img/hotelimg/h1.jpg"},
        {src: "/img/hotelimg/h2.jpg"},
        {src: "/img/hotelimg/h3.jpg"},
        {src: "/img/hotelimg/h4.jpg"},
      ],
      about: "ADVANCE SAVER BKFST Special savings advance\\npurchase. Includes breakfast for one or two\\nSTANDARD ROOM NS CONTEMPORARY STYLED DOUBLE",
      location: "Almaty • Show om map • 900 m from centre",
    }
  },
}
</script>

<style scoped>
* {
  margin: 0;
  font-family: Nunito, sans-serif;
}

body {
  padding-top: 6%;
  line-height: 1.5;
  margin-top: auto;
}

.product-prices{
  border-radius: 15px;
  border: solid #01a4b6;
  background: #D6F8FC;
  color: #01a4b6;
  margin-top: 15px;
  /*grid params*/
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  grid-auto-rows: minmax(100px, auto);

}

.prices-details{
  margin: 15px;
}

.prices-advantages{
  grid-column: 2/4;
  text-align: right;
  margin: 10px 15px 10px 0;
}

.prices{
  margin: 15px;
}

@media screen and (min-width: 992px) {
  .card-main {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1.5rem;
    grid-auto-rows: minmax(100px, auto);
  }

  .product-imgs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-column: 1/4;
    grid-row: 1;
  }

  .product-content {
    grid-column: 4/7;
    grid-row: 1;
  }

  .comment-section {
    /*another approach required*/
    grid-column: 4/6;
    grid-row: 2;
  }


}


.vanilla-btn {
  float: right;
  margin: 15px 15px 0 0;
  color: white;
  border-radius: 5px;
  height: 50px;
  width: 150px;
  background: #01A4B6;
  text-align: center;
  border: none;
}

.card-wrapper {
  max-width: 1400px;
  margin: auto;
}

img {
  width: 100%;
  display: block;
}

.img-display {
  overflow: hidden;
}

.img-showcase {
  display: flex;
  width: 100%;
  transition: all 0.5s ease;
}

.img-showcase img {
  min-width: 100%;
}

.img-select {
  display: flex;
}

.img-item {
  margin: 0.3rem;
}

.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3) {
  margin-right: 0;
}

.img-item:hover {
  opacity: 0.8;
}


.product-title {
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  color: #12263a;
  margin: 1rem 0;
}

.product-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 200px;
  background: #01A4B6;
}

.product-rating {
  color: #ffc107;
}

.product-rating span {
  font-weight: 600;
  color: #252525;
}

.product-detail h2 {
  text-transform: capitalize;
  color: #12263a;
  padding-bottom: 0.6rem;
}

.product-detail p {
  font-size: 0.9rem;
  padding: 0.3rem;
  opacity: 0.8;
}

.product-detail ul {
  margin: 1rem 0;
  font-size: 0.9rem;
}

.product-detail ul li {
  list-style: none;
  background-size: 18px;
  padding-left: 1.7rem;
  margin: 0.4rem 0;
  font-weight: 600;
  opacity: 0.9;
}

.product-detail ul li span {
  font-weight: 400;
}

.purchase-info input {
  width: 60px;
}


</style>
