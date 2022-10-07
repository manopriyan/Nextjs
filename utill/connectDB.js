const mongoose = require("mongoose");

async function connectDB() {
    try{
        await mongoose.connect('mongodb+srv://manopriyan:P95ijxs2WFEJ6zw@cluster0.e7lkdli.mongodb.net/demoapp', {useUnifiedTopology : true, useNewUrlParser: true})
        console.log("mongo db connection successfull");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;