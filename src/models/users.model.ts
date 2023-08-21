import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },

  // more field add later
  // to add more field first delete old users model
});

const User = models.Users || model("Users", userSchema);

export default User;
