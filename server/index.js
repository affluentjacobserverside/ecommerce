const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

//cors settings
app.use(cors());
// initailize express application
const app = express();

//use express json
app.use(express.json());

// configure the dotenv 
dotenv.config();

// connect to mongo DB
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connection Successful"))
.catch((err)=>console.log(err));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
// app to listen for a port server connection
app.listen(process.env.PORT || 5000, ()=>{
    console.log("Background Server is Running")
})

