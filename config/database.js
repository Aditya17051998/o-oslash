const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb+srv://bhumiRLMS:oYOiJdMKDY5NfIIj@cluster0.ahfqp.mongodb.net/oslashDB3?retryWrites=true&w=majority', {
    useNewUrlParser: true,
  });

  console.log(`MongoDB connected`);
};

module.exports = connectDB;
