<template>
  <div class="products" id="products">
    <div class="container">
      <h1 class=" oservice text-center p-4">Our Services</h1>
      <div class="row">
        <div
          class="col-md-4"
          v-for="services in serviceData"
          :key="services.title"
          :services="services"
        >
          <div class="card product-item">
            <img
              :src="services.img"
              class="card-img-top"
              alt="..."
              width="150px"
              height="250px"
            />
            <div class="card-body">
              <h5 class="card-title">{{ services.title }}</h5>
              <p class="card-text">{{ services.info }}</p>
              <router-link :to="services.link" class="btn btn-primary">
                Go to...
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: ["services"],
  data() {
    return {
      serviceData: [
        {
          title: "Hotels",
          info: "Lorem ipsum dolor sit amet.",
          img: "/img/products/club-room.jpg",
          link: "/hotels"
        },
        {
          title: "Flights",
          info: "Lorem ipsum dolor sit amet.",
          img: "/img/products/airplane.jpg",
          link: "/flights"
        },
        {
          title: "Guides",
          info: "Lorem ipsum dolor sit amet.",
          img: "/img/products/tour-guide.jpg",
          link: "/guides"
        },

      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  margin-top: 7rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}
</style>


