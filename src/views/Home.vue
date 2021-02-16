<template>
  <div class="home">
    <MainPage />
    <section>
      <Products />
    </section>
    <About />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
import Products from "@/sections/Products.vue";
import About from "@/sections/About.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    MainPage,
    Products,
    About,
    Login,
  },
};
</script>

