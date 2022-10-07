import React, { useState } from 'react'
import {useRouter} from 'next/router'
import domain from '../../utill/config'
import axios from 'axios'

export default function Index({post}) {
  const router = useRouter();
console.log(post);
  const[title, setTitle] = useState(post.title);
    const[description, setDescription] = useState(post.description);
    const[imageUrl, setImageUrl] = useState(post.imageUrl);

    async function editPost() {
      const editedPost = {title, description, imageUrl}

      try {
        await axios.put(`${domain}/posts/${post._id}`, editedPost)
        alert("post updated successfully");
        window.location.href = "/posts"
      } catch(error) {
        console.log(error);
        alert("some thing went wrong");
      }

    }

  return (
    <div className='mt-5'>
        <div className='row justify-content-center'>
            <div className='col-md-6 boxshadow p-3'>
                <div className='flex justify-content-between'>
                    <h1>Edit Post</h1>
                    <div>
                    <button className='btn btn-info'> View Posts</button>
                    </div>
                </div>
                <div>
                    <input type = "text" className='form-control' placeholder='title' 
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    ></input>

                    <input type = "text" className='form-control' placeholder='image url'
                    value={imageUrl}
                    onChange={(e)=>{setImageUrl(e.target.value)}}
                    ></input>

                    <textarea rows="10" cols="10" className='form-control' placeholder='description'
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                    ></textarea>

                    <button className='btn btn-success mt-3' onClick={editPost}> Add Post</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export async function getServerSideProps(context){
  try {
    const response = await axios.get(`${domain}/posts/${context.query.id}`)
    // console.log(response);
    return {
      props : {
        post : response.data
      }
    }

  } catch (error) {

  }
}
