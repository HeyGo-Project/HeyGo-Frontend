import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Hotels from "@/views/Hotels";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/hotels",
      name: "hotels",
      component: Hotels
    },
  ]
});
