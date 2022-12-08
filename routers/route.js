const cryptoRouter = require("express").Router();
// const { response } = require("express");
const {getinfo} = require("../controller/cryptoController");
const{Crypto} = require("../model/bitModel")

 
 cryptoRouter.get("/" ,async (_,response)=>{
     let data = await getinfo()

     const promises = data.map((c)=>{
         return Crypto.findOneAndUpdate(
            {name:c.name},
            {$set : c},
            {upsert:true,new:true}
        )
    })
    Promise.all(promises).then((data)=>{ //all pending code catch promise.all
        response.status(200).json({data})
    })

 })
// module.exports = route

module.exports = {cryptoRouter}