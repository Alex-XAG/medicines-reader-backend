const mongoose = require("mongoose");

const DB_HOSTM =
  "mongodb+srv://Alex_XAG:Pigeon87@cluster0.bnhkdww.mongodb.net/Medicines_reader?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB_HOSTM)
  .then(() => {
    console.log("dataBase connect success");
  })
  .catch((error) => console.log(error.message));
