const mongoose = require('mongoose')
require('dotenv').config()
const dbConnect = () =>
{
    mongoose.connect(process.env.URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log("DB ka Connection Successful")).catch((err)=>{console.log(err)})
}
module.exports = dbConnect