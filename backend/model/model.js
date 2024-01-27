import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  score: {
    required: true,
    type: Number,
  },
});

const User = mongoose.model("User", dataSchema);

export { User };
