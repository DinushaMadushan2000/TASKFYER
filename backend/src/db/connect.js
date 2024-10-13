import mongoose from "mongoose";

const MONGO_URI="mongodb+srv://dinushamadushan491:dinu1234@cluster05.d0xt8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster05";

const connect = async () => {
  try {
    console.log("Attempting to connect to database.....");
    await mongoose.connect(MONGO_URI, {});
    console.log("Connected to database.....");
  } catch (error) {
    console.log("Failed to connect to database.....", error.message);
    process.exit(1);
  }
};

export default connect;
