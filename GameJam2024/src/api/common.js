import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.PROD
    ? "https://game-jam2024.vercel.app/api"
    : "http://localhost:3000/api",
  credentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
