import http from "./common.js";

const getAll = async () => {
  return http.get("/getAllScore");
};

const addScore = async (data) => {
  return http.post("/addScore", data);
};

const apiService = {
  getAll,
  addScore,
};

export default apiService;
