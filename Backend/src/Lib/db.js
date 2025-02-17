import mongoose from "mongoose";

const ConnectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Server is connected to MONGODB`);
  } catch (error) {
    console.log(error);
  }
};

export default ConnectionDB;
