exports.dummyLink = async(req,res)=>{
    try
    {
        res.send("This is dummy page ")
    }
    catch(err)
    {
        console.log(err)
    }
}
    
// module.exports = dummyLink