import express from "express";
import { User } from "../model/model.js";

const APIrouter = express.Router();

//get All method
APIrouter.get("/getAllScore", (req, res) => {
  User.find()
    .sort({ score: -1 })
    .then((found) => {
      res.send(found);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

//create score entry Method
APIrouter.post("/addScore", (req, res) => {
  const newScore = new User({
    username: req.body.username,
    score: req.body.score,
  });

  newScore
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

//test Method
APIrouter.get("/test", (req, res) => {
  res.send("test");
});

export { APIrouter };
