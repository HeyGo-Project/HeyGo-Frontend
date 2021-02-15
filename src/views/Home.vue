<template>
  <div class="home">
    <MainPage />
    <section>
      <Products/>
    </section>
    Products
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
import Products from "@/sections/Products.vue";
export default {
  name: "home",
  components: {
    MainPage,
    Products,
  },
};
</script>

