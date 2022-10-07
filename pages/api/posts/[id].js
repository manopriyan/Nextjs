
import nc from 'next-connect'
import connectDB from '../../../utill/connectDB'
import Post from '../../../models/post'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

connectDB();


const handler = nc().get((async(req, res)=> {

    try {
// console.log("printing id" +req.query.id);
        const post = await Post.findOne({_id : req.query.id})

        res.send(post);

    } catch (error) {
        return res.status(400).json({message: "something went wrong"})
    }


})).put(async(req, res)=> {
    try {
         const post = await Post.findOne({_id : req.query.id})

         post.title = req.body.title;
         post.description = req.body.description;
         post.imageUrl = req.body.imageUrl;

         await post.save()

         res.send("post edited successfully");
    } catch (error) {
        res.status(400).json({message : "Something went wrong"});
    }
}).delete(async(req, res)=> {
    try {
        await Post.findOneAndDelete({_id: req.query.id})
        res.send("post deleted successfully");
    } catch (error) {
        return res.status(400).json({message:"Unable to delete"});
    }
})

export default handler
