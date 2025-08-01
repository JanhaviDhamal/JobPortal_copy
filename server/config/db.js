import mongoose from "mongoose"

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Mongodb connected: ${conn.connection.host}`);
    }
    catch(error){
        console.log("Mongodb connection failed", error);
        process.exit(1);
        
    }
};
export default connectDB;