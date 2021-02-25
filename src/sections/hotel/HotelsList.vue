<template>
  <div class="hotels" id="hotels">
    <div class="container">
      <div class="row">
        <div
            class="col-md-4"
            v-for="hotelsData in hotels"
            :key="hotelsData.title"
        >
          <div class="card product-item">
            <img
                :src="hotelsData.img"
                class="card-img-top"
                alt="..."
                height="300px"
            />
            <div class="card-body">
              <h5 class="card-title">{{ hotelsData.name }}</h5>
              <p class="card-text">{{ hotelsData.info }}</p>
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
  props: ['hotels'],
  data() {
    return {

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hotels {
  padding-top: 20px;
  background: #f2f2f2;
  padding-bottom: 1rem;
}

.card {
  margin-bottom: 10px;
}
</style>


