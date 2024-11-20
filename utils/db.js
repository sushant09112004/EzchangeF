import mongoose from "mongoose";
  
// Connection function
const connect = async () => {
    // Check if there's an existing connection and if it's ready
    if (mongoose.connections[0].readyState) {
        console.log("Already connected to MongoDB.");
        return; // If connected, return early
    }
    // console.log(process.env.MONGO_URL);
    try {
        // Connect to MongoDB with connection options
        await mongoose.connect("mongodb+srv://existencefinadvise:Zv2xKKMYyvafc2ys@cluster0.llztjlx.mongodb.net/FinAdvise?retryWrites=true&w=majority&appName=Cluster0"
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        );
        console.log("Connection to MongoDB established")
        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw new Error("Failed to connect to MongoDB.");
    }
};

export default connect;