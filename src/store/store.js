import Vue from "vue";
import Vuex from "vuex";
import {register, signIn, getUser} from "./api/auth";
import {findHotelsInCity} from "./api/hotels";
import cookie from "js-cookie";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        error: null,
        token: cookie.get("accessToken") || null,
        user: {
            id: 0,
            email: '',
            firstName: '',
            lastName: '',
            birthDate: '',
            gender: '',
            verified: false,
        },
        hotels: [
            {
                name: ''
            }
        ],
        city: '',
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
    getters: {
        loggedIn(state) {
            return state.token != null;
        },
        error(state) {
            return state.error != null
        }
    },
    mutations: {
        retrieveToken(state, token) {
            this.state.token = token;
        },
        retrieveUser(state,
                     credentials) {
            state.user.gender = credentials.gender
            state.user.email = credentials.email
            state.user.firstName = credentials.firstName
            state.user.lastName = credentials.lastName
            state.user.birthDate = credentials.birthDate
        },
        destroyToken(state) {
            state.token = null;
        },
        setError(state, error) {
            state.error = error
        },

    },
    actions: {
        destroyToken(context) {
            return new Promise((resolve, reject) => {
                try {
                    context.commit("destroyToken", cookie.remove("accessToken"));
                    resolve("works!");
                } catch (err) {
                    console.log(err);
                    reject(err);
                }
            });
        },
        retrieveToken(context, credentials) {
            return new Promise((resolve, reject) => {
                try {
                    signIn(credentials.email, credentials.password).then(r => {
                        context.commit("retrieveToken", cookie.get("accessToken"));
                        resolve(r + "works!");
                    })

                } catch (err) {
                    context.commit("setError", err);
                    console.log(err);
                    reject(err);
                }
            })
        },
        getUserData(context) {
            return new Promise((resolve, reject) => {
                try {
                    getUser().then(r => {
                        resolve(r + "works!");
                    })
                } catch (err) {
                    context.commit("setError", err);
                    console.log(err);
                    reject(err);
                }
            })
        },
        registerUser(context, credentials) {
            return new Promise((resolve, reject) => {
                try {
                    register(
                        credentials.email,
                        credentials.password,
                        credentials.firstName,
                        credentials.lastName,
                        credentials.birthDate,
                        credentials.gender
                    ).then(r => {
                        context.commit("retrieveUser",
                            credentials,
                        );
                        resolve(r + "works!");
                    });
                } catch (err) {
                    console.log(err);
                    reject(err);
                }
            });
        },
        getHotelsFromCity(context, city) {
            return new Promise((resolve, reject) => {
                try {
                    findHotelsInCity(city.city).then(r => {
                        resolve(r + "works!");
                    });
                } catch (err) {
                    console.log(err);
                    reject(err);
                }
            })
        }
    }
});
