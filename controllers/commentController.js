const Comment= require('../models/commentSchema')
const Post = require('../models/postSchema')
const commentController = async(req,res)=>
{
    try{

        //fetch data from req body
        const{post,body,user}=req.body;

        // create comment object
        const comment = new Comment({post,body,user})

        //save the new comment into the databse  
        const savedComment = await comment.save();

        // find post by ID , add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
                            .populate("comments") // populate the comments array with comment documents
                            .exec()

        res.json({post:updatedPost})

    }
    catch(err)
    {
        return res.status(500).json({err:"Error While creating Comment"})
        console.log(err)
    }
}
module.exports= commentController