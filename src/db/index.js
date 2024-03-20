import mongoose, { connect } from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB = async () =>{
    
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n  Mongodb connected in port ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("Error" , error)
        // throw error or
        process.exit(1)
    }
}

export default connectDB