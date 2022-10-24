require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = () => {
//  console.log(process.env)

  const CONNECTION_URI = "mongodb+srv://fida:WCoyluareYqaI71N@e-commerce.gpn4f1x.mongodb.net/?retryWrites=true&w=majority"
  let asyncDone = false;
  const innerFn = function()
  {
    mongoose.connect("mongodb://127.0.0.1:27017/test",(err, mongoConn) => {

        if(err)
        {
          console.log("error:",err)
        }
        else
        {
          console.log({mongoConn})
        }
        asyncDone = true;
    });

     
  }

  innerFn();
  require("deasync").loopWhile(() => !asyncDone);

};

module.exports = connectDB;
