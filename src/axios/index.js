import axios from "axios";
import { url } from "../constants/urls";

export const userRegister = async (userData) => {
  await axios.post(`${url}/auth/ownersignup`, userData);
};

export const userLogin = async (userData) =>
  await axios.post(`${url}/auth/ownersignin`, userData);
