const mongoose = require("mongoose")

const connectToDb = async ()=>{
    try{
        const res = await mongoose.connect("mongodb://127.0.0.1:27017/file-uploader")
        if(res){ 
            console.log("Databse connected successfully");
            
        }

    }
    catch(err){
        console.log({msg:"something wrong with databse",err});
        

    }
}

module.exports = connectToDb