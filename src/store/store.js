import Vue from "vue";
import Vuex from "vuex";
import {signIn} from "./api/auth";
import cookie from 'js-cookie';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: cookie.get("accessToken") || null,
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
  },
  getters:{
    loggedIn(state){
      return state.token != null
    }
  },
  mutations:{
    retrieveToken(state, token){
      this.state.token = token
    }
  },
  actions:{
    async retrieveToken(context, credentials){
      try {
        await signIn(credentials.email, credentials.password)
        context.commit('retrieveToken', cookie.get("accessToken"))
      }catch (err){
        console.log(err)
      }
    },

  }
});
