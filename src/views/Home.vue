<template>
  <div class="home">
    <MainPage />
    <section>
      <Products />
    </section>
    <About/>

  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
import Products from "@/sections/Products.vue";
import About from "@/sections/About.vue"
export default {
  name: "home",
  components: {
    MainPage,
    Products,
    About,
  },
};
</script>

