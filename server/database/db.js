const mongoose = require("mongoose");
const DB_URI = "mongodb+srv://avez-mern-2023:sarkar@cluster0.vkg2kmb.mongodb.net/?retryWrites=true&w=majority";

const connectDatabase = () => {
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = connectDatabase;
