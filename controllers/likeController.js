const Like = require('../models/likeSchema')
const mummyLink = async(req,res)=>{
    try
    {
        const {post,user} = req.body;
        const response = await Like.create({post,user})
        res.status(200).json({success:true,data:response,message:"Entry Created"})
        // res.send("This is mummy page ")
    }
    catch(err)
    {
        console.log(err)
    }
}
    
module.exports = mummyLink