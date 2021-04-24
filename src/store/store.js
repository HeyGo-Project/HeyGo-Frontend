import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    guides: [
      {
        imgUrl:
          "https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg",
        firstName: "Alisher",
        lastName: "Zharmukhambetov",
        position: "Professional guide",
        professional: true,
        legend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        imgUrl:
          "https://www.indiewire.com/wp-content/uploads/2020/12/lord-of-rings-1.png",
        firstName: "Alisher",
        lastName: "Zharmukhambetov",
        position: "Professional guide",
        professional: false,
        legend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        imgUrl:
          "https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg",
        firstName: "Alisher",
        lastName: "Zharmukhambetov",
        position: "Professional guide",
        professional: false,
        legend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        imgUrl:
          "https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg",
        firstName: "Alisher",
        lastName: "Zharmukhambetov",
        position: "Professional guide",
        professional: true,
        legend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      }
    ]
  }
});
