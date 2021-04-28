import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Hotels from "@/views/Hotels";
import Hotel from "@/views/Hotel";
import Profile from "@/views/Profile";
import Guidelist from "./views/Guidelist";
import SearchHotel from "./views/SearchHotel";
import Registration from "./components/Auth/Registration";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import Flights from "./views/Flights";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  userData:{

  },
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta:{
        requiresVisitor: true,
      }
    },
    {
      path: "/registration",
      name: "register",
      component: Registration,
      meta:{
        requiresVisitor: true,
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
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
      component: Profile,
      meta:{
        requiresAuth: true,
      }
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
    },
    {
      path: "/flights",
      name: "flights",
      component:Flights
    }
  ],
});

