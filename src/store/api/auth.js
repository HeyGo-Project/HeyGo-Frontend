import { POST } from "../../api/axios";
import { len } from "vuelidate/lib/validators/common";
import cookie from 'js-cookie'

const loginUrl = process.env.VUE_APP_GATEWAY_LINK + "/authorization";
const registerUrl = process.env.VUE_APP_GATEWAY_LINK + "/registration";

export const signIn = async (email, password) => {
  const response = await POST(`${loginUrl}`, {
    email,
    password
  });
  if (!response.success) {
    throw new Error("Incorrect email or password");
  }
  const ACCESS_TOKEN = response.data.first.jwt
    .toString()
    .substring(7, len(response.data.first.jwt));
  cookie.set('accessToken', ACCESS_TOKEN)
} ;

export const register = async (
    email,
    password,
    firstName,
    lastName,
    birthDate,
    gender,
) => {
  const response = await POST(`${registerUrl}`, {
    email,
    firstName,
    lastName,
    password,
    gender,
    birthDate,
  });
  if (!response.success) {
    throw new Error("Error  creating user");
  }
}
