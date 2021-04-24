import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Hotels from "@/views/Hotels";
import Hotel from "@/views/Hotel";
import Profile from "@/views/Profile";
import Guidelist from "./views/Guidelist";
import SearchHotel from "./views/SearchHotel";
import Authentication from "./views/Authentication";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: Authentication
    },
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
    {
      path: "/hotel",
      name: "hotel",
      component: Hotel
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/guides",
      name: "guides",
      component:Guidelist
    },
    {
      path: "/hotels/search",
      name: "searchHotel",
      component:SearchHotel
    }
  ]
});
