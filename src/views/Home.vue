<template>
  <div class="home">
    <MainPage />
    <section>
      <Products />
    </section>
    <About />
  </div>
</template>

<script>
import MainPage from "@/sections/home/MainPage";
import Products from "@/sections/home/Products.vue";
import About from "../sections/home/About";

export default {
  name: "home",
  components: {
    MainPage,
    Products,
    About,
  },
};
</script>

