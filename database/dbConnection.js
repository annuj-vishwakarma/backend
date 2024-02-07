import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URL,{
      dbName:"JOB_FINDER_WEBAPP"  
    }).then(()=>{
        console.log('Connected to Database!')
    }).catch(()=>{
        console.log(`Some Errors occured while connecting to database: ${err}`);
    })
};