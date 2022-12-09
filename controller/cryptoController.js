const axios =require("axios")

const url = "https://api.coincap.io/v2/assets";

module.exports.getinfo = async()  => {
    const response= await axios.get(url);
    return response.data.data
     .sort((c1,c2) => {
            const {changePercent24hr:p}=c1
            const{changePercent24hr:p2}=c2
            return p -p2;
        })
    .map((c)=>{
        const { priceUse,symbol,name, marketCapUsd}=c;
        return { priceUse,symbol,name, marketCapUsd};
    })
}