import {POST} from "../../api/axios";
import {len} from "vuelidate/lib/validators/common";
import cookie from "js-cookie";
import {store} from '../store'

const loginUrl = process.env.VUE_APP_GATEWAY_LINK + "/authorization";
const registerUrl = process.env.VUE_APP_GATEWAY_LINK + "/registration";

export const signIn = async (email, password) => {
    const response = await POST(
        `${loginUrl}` + `?email=` + `${email}` + `&password=` + `${password}`
    );
    if (!response.success) {
        throw new Error("Incorrect email or password");
    }

    const ACCESS_TOKEN = response.data.body.first.jwt
        .toString()
        .substring(7, len(response.data.body.first.jwt))
    cookie.set("accessToken", ACCESS_TOKEN);
    store.state.user = {
        email: response.data.body.second.email,
        birthDate: response.data.body.second.birthDate,
        lastName: response.data.body.second.lastName,
        firstName: response.data.body.second.firstName,
        gender: response.data.body.second.gender,
    }
    localStorage.setItem('userData', JSON.stringify(store.state.user))
};

export const register = async (
    email,
    password,
    firstName,
    lastName,
    birthDate,
    gender
) => {
    const response = await POST(`${registerUrl}`, {
        email,
        firstName,
        lastName,
        password,
        gender,
        birthDate
    });

    if (!response.success) {
        throw new Error("Error  creating user");
    }
};
