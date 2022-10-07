
import nc from 'next-connect'
import connectDB from '../../../utill/connectDB'
import Post from '../../../models/post'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

connectDB();


const handler = nc().post(async(req, res)=> {
  
    const{title, description, imageUrl} = req.body

    try {
        const newpost = new Post({title, description, imageUrl})

        await newpost.save();

        res.send("post added successfully");
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'something went wrong'})
    }

}).get((async(req, res)=> {

    try {

        const posts = await Post.find()
        res.send(posts);

    } catch (error) {
        return res.status(400).json({message: "something went wrong"})
    }


}))

export default handler
