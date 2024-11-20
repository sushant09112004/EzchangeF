import mongoose from 'mongoose';

const sushant = async () => {
  if (mongoose.connection.readyState === 1) {
    return; // Already connected
  }
  await mongoose.connect("mongodb+srv://jadhavsushant379:2WFW6tSHs23TAMgn@cluster0.qgldc.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default sushant;
