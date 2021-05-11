import axios from "axios";
import https from 'https'

import cookie from "js-cookie";
const agent = new https.Agent({
  rejectUnauthorized: false
});
const token = cookie.get("accessToken")
const axiosConfig = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  }
});

const GET = async (url, params = {}, headers = {}) => {
  try {
    const response = await axiosConfig({
      url,
      method: "GET",
      params,
      headers
    });

    if (response.status >= 200 && response.status < 300) {
      return {
        ...response,
        success: true
      };
    }

    return {
      ...response,
      success: false
    };
  } catch (error) {
    return {
      ...error?.response,
      success: false
    };
  }
};

const POST = async (url, data = {}, headers = {}) => {
  try {
    const response = await axiosConfig({
      url,
      method: "POST",
      data,
      headers
    });

    if (response.status >= 200 && response.status < 300) {
      return {
        ...response,
        success: true
      };
    }

    return {
      ...response,
      success: false
    };
  } catch (error) {
    return {
      ...error?.response,
      success: false
    };
  }
};

const PUT = async (url, data = {}, headers = {}) => {
  try {
    const response = await axiosConfig({
      url,
      method: "PUT",
      data,
      headers
    });

    if (response.status >= 200 && response.status < 300) {
      return {
        ...response,
        success: true
      };
    }

    return {
      ...response,
      success: false
    };
  } catch (error) {
    return {
      ...error?.response,
      success: false
    };
  }
};

const DELETE = async (url, headers = {}) => {
  try {
    const response = await axiosConfig({
      url,
      method: "DELETE",
      headers
    });

    if (response.status >= 200 && response.status < 300) {
      return {
        ...response,
        success: true
      };
    }

    return {
      ...response,
      success: false
    };
  } catch (error) {
    return {
      ...error?.response,
      success: false
    };
  }
};

export { GET, POST, PUT, DELETE };
