const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  userName: String,
  password: String,
  role: String,
});
module.exports = model("User", userSchema);
