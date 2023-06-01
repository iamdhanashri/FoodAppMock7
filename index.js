const express=require("express");
const { dbConnection } = require("./configs/db");
const { userRouter } = require("./routes/user.route");
const { restRouter } = require("./routes/restaurant.route");
const { orderRouter } = require("./routes/order.route");

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("homepage")

})

app.use("/api",userRouter)
app.use("/api",restRouter)
app.use("/api",orderRouter)

app.listen(8080,async()=>{
    try{
   await dbConnection
   console.log("connected to db")
    }
    catch(e){
        console.log(e.message)
    }
    console.log("listening port 8080")
})