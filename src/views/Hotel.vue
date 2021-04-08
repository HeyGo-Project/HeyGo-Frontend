<template>
  <body>
  <div class="card-wrapper">
    <div class="card">
      <!-- card left -->
      <div class="product-imgs">

        <div class="img-display">
          <div class="img-showcase">
            <img :src="images[0].src" alt="Hotel image">
          </div>
        </div>

        <div class="img-select">
          <div v-for="imgs in images" class="img-item">
            <a href="#">
              <img :src="imgs.src" alt="Hotel image">
            </a>
          </div>
        </div>

      </div>

      <!-- card right -->
      <div class="product-content">
        <h2 class="product-title">Renion Park hotel</h2>
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
          <p>{{ about }}</p>

          <ul>
            <li
                v-for="advs in advantages"
            >{{ advs.adv }}
            </li>
          </ul>

        </div>

        <button
            class="btn btn-primary"
            style="float: right"
        >
          Reserve
        </button>


      </div>

    </div>

  </div>
  <div style="display: block;
  margin-left: 350px;
  margin-right: auto;">
    <Reviews/>
  </div>

  </body>
</template>

<script>
import Review from "../sections/profile/Review";
import Reviews from "../sections/profile/Review";

export default {
  name: "Hotel",
  components: {Reviews},
  comments: Review
  ,
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
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat\n" +
          "            sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa.",
      location: "Almaty • Show om map • 900 m from centre",

    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

body {
  line-height: 1.5;
  margin-top: 15px;
}

.card-wrapper {
  max-width: 1300px;
  margin: 0 auto;
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

.product-content {
  padding: 2rem 1rem;
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
  width: 80px;
  background: #12263a;
}

.product-rating {
  color: #ffc107;
}

.product-rating span {
  font-weight: 600;
  color: #252525;
}

.product-price {
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 700;
}

.product-price span {
  font-weight: 400;
}

.last-price span {
  color: #f64749;
  text-decoration: line-through;
}

.new-price span {
  color: #256eff;
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

.purchase-info {
  margin: 1.5rem 0;
}

.purchase-info input,
.purchase-info .btn {


  text-align: center;
  padding: 0.45rem 0.8rem;
  outline: 0;
  margin-right: 0.2rem;
  margin-bottom: 1rem;
}

.purchase-info input {
  width: 60px;
}

.purchase-info .btn {
  cursor: pointer;
  color: #fff;
}

.purchase-info .btn:first-of-type {
  background: #256eff;
}

.purchase-info .btn:last-of-type {
  background: #f64749;
}

.purchase-info .btn:hover {
  opacity: 0.9;
}

.social-links {
  display: flex;
  align-items: center;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #000;
  margin: 0 0.2rem;
  text-decoration: none;
  font-size: 0.8rem;
  transition: all 0.5s ease;
}

.social-links a:hover {
  background: #000;
  color: #fff;
}

@media screen and (min-width: 992px) {
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }

  .card-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-imgs {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .product-content {
    padding-top: 0;
  }
}
</style>
