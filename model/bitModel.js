const mongoose  = require('mongoose')
const schema = new mongoose.Schema ({

  symbol: String,
    name:  String,
    marketCapUsd: String,
     priceUsd: String
    });

    const Crypto = mongoose.model("Crypto",schema)
    
    // module.exports ={bitModel};
    module.exports ={Crypto} 