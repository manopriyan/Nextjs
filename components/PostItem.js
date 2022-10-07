import React from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import domain from '../utill/config'

function PostItem({post}) {
    const router = useRouter()

    async function deletePost() {
        try {
            await axios.delete(`${domain}/posts/${post._id}`)
            alert("Post deleted successfully");

            window.location.href = "/posts";
        } catch(error) {
            alert("Unable to delete");
        }
    }

  return (
    <div className='col-md-7 p-3 m-3 boxshadow'>
        <h3>{post.title}</h3>
        <img src={post.imageUrl} className="img-fluid" height="400"></img>

        <p>{post.description}</p>

        <button className='btn btn-info m-2' onClick={()=>{router.push(`/posts/${post._id}`)}}>Edit</button>
        <button className='btn btn-danger m-2' onClick={()=>{deletePost(post._id)}}> Delete</button>
    </div> 
    
  )
}

export default PostItem