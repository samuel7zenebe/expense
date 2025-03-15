const { connect, default: mongoose, connection, Model } = require("mongoose");
const LoanModel = require("./models/loan.model");
const uri =
  "mongodb+srv://user_1:samuelZE06-11@cluster06797.kcc9i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster06797";
async function connectToDatabase() {
  let connection;
  if (!connection) {
    try {
      connnection = await mongoose.connect(uri, {
        dbName: "expense_database",
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = connectToDatabase;
