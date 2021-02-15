<template>
  <div class="main">
    <div class="container h-100">
      <div class="row h-2000 justify-content-center align-items-center">
        <div class="col-md-5">
          <div class="main-content">
            <h1 class="main-title">Welcome to HeyGo!</h1>
            <p>
              Explore the word, broaden your mind and make new friends with a
              first app supporting both booking and guiding service just for
              You!
            </p>
            <div class="main-btn mt-7">
              <button class="btn custom-btn btn-info mr-4">Explore</button>
              <button class="btn custom-btn btn-outline-secondary">
                Products
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="graphic">
            <img
              src="/img/svg/travel.svg"
              style="
                display: inline-block;
                position: relative;
                width: 100%;
                vertical-align: middle;
                overflow: hidden;
                padding: 2rem
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  padding-top: 7rem;
  width: 100%;
  height: 500px;
  text-align: left;
}

</style>
