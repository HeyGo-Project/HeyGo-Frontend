import { POST } from "../../api/axios";
import { len } from "vuelidate/lib/validators/common";
import cookie from 'js-cookie'

const baseUrl = process.env.VUE_APP_GATEWAY_LINK + "/authorization";

export const signIn = async (email, password) => {
  const response = await POST(`${baseUrl}`, {
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
