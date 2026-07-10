const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing");

const mongoURL = "mongodb://127.0.0.1:27017/wanderLust";

main().then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(mongoURL);
}

const initDb = async() => {
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj)=>({...obj,owner:"6a49e804380b59cbb9ed9d7d"}))
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
}

initDb();