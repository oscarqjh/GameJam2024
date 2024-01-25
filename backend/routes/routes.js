import express from "express";

const APIrouter = express.Router();

//Test method
APIrouter.get("/test", (req, res) => {
  res.send("test");
});
