import { Schema, model } from "mongoose";

const userSchema = Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model("user", userSchema);
