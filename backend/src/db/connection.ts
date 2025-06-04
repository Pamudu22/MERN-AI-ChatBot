import { connect,disconnect  } from "mongoose";

async function connectDB(){
    try{
        await connect(process.env.MONGODB_URL);
        console.log("MongoDB connected successfully");

    }catch(error){
        console.error("MongoDB connection failed", error);
        
    }
}

async function disconnectDB(){
    try{
        await disconnect();
        console.log("MongoDB disconnected successfully");

    }catch(error){
        console.error("MongoDB disconnection failed", error);
        
    }
}

export { connectDB, disconnectDB };