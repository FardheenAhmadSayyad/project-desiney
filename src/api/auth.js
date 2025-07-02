
import axios from "axios";

const BASE_URL = "https://codeyouarha-bellytoo.com"; 

export const login = (mobile, otp) => {
  return axios.post(`${BASE_URL}/admin/login`, { mobile, otp });
};

export const register = (userData) => {
  return axios.post(`${BASE_URL}/customer-register`, userData);
};
