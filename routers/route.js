const cryptoRouter = require("express").Router();

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
    Promise.all(promises).then((data)=>{ 

        Crypto.deleteMany({
            _id: {
              $nin: data.map((i) => i._id),
            },
          }).then(console.log);
        
//all pending code catch promise.all
        response.status(200).json({data})
    })

 })


module.exports = {cryptoRouter}