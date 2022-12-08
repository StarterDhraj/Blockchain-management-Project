const axios =require("axios")


const url = "https://api.coincap.io/v2/assets";

module.exports.getinfo = async()  => {
    const response= await axios.get(url);
    return response.data.data.map((c)=>{
        const { priceUse,symbol,name, marketCapUsd}=c;
        return { priceUse,symbol,name, marketCapUsd};
    })
}