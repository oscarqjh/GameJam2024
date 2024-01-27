import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.PROD ? "" : "http://localhost:3000/api",
  credentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
