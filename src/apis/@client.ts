import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_END_POINT,
  withCredentials: true,
});

export default client;
