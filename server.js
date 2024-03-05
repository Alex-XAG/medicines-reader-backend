const app = require("./app");
const mongoose = require("mongoose");
const { PORT = 3000 } = process.env;

const DB_HOST =
  "mongodb+srv://Alex_XAG:Pigeon87@cluster0.bnhkdww.mongodb.net/Medicines_reader?retryWrites=true&w=majority&appName=Cluster0";
mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })
