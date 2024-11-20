import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to MongoDB.");
    return;
  }
  try {
    await mongoose.connect("mongodb+srv://jadhavsushant379:2WFW6tSHs23TAMgn@cluster0.qgldc.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection to MongoDB established");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("Failed to connect to MongoDB.");
  }
};

export default connect;
