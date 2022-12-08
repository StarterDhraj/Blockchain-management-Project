
const express = require("express");
const mongoose = require("mongoose");
const {cryptoRouter} = require("./routers/route");
// const bodyParser= require("body-Parser")
// const route =require("./controller/cryptoController.js")
const app = express();
// const router = express.Router()

// app.use(bodyParser.json())
app.use(express.json());

mongoose
.connect("mongodb+srv://dhiraj1222:Kmt4R9zWqORvLGLj@cluster0.jlph9m0.mongodb.net/cryptoManagement",
{
useNewUrlParser:true,
}
,mongoose.set('strictQuery', false))

.then(()=> console.log("MongooDB connected Successfully"))
.catch((err )=> {
    console.log(err.massage);
})

app.use("/",cryptoRouter);
// const  PORT = 3000;

app.listen(process.env.PORT||3000 , function(){
    console.log("express app running on this port"+(process.env.PORT || 3000))

})