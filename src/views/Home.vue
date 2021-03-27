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
import MainPage from "@/sections/home/MainPage";
import Products from "@/sections/home/Products.vue";
import About from "../sections/home/About";
import Login from "@/components/Auth/Authentication.vue";

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

