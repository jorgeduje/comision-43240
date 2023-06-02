import axios from "axios";

export const productAxios = axios.create({
  baseURL: "http://localhost:5000/products",
});
