import React, {useState} from 'react'
import axios from 'axios'
import domain from '../../utill/config';



 function AddPost() {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState("");
    const[imageUrl, setImageUrl] = useState("");

    async function addPost() {
        const post = {
            title, description, imageUrl
        }

        try{
            await axios.post(`${domain}/posts`, post)

            window.location.href="/posts";
            alert("Post added successfully");
        } catch(error) {
            alert("some thing went wrong");
        }

        // console.log(post);
    }

  return (
    <div className='mt-5'>
        <div className='row justify-content-center'>
            <div className='col-md-6 boxshadow p-3'>
                <div className='flex justify-content-between'>
                    <h1>Create New Post</h1>
                    <div>
                    {/* <button className='btn btn-info'> View Posts</button> */}
                    </div>
                </div>
                <div>
                    <input type = "text" className='form-control' placeholder='title' 
                    onChange={(e)=>{setTitle(e.target.value)}}
                    ></input>

                    <input type = "text" className='form-control' placeholder='image url'
                    onChange={(e)=>{setImageUrl(e.target.value)}}
                    ></input>

                    <textarea rows="10" cols="10" className='form-control' placeholder='description'
                    onChange={(e)=>{setDescription(e.target.value)}}
                    ></textarea>

                    <button className='btn btn-success mt-3' onClick={addPost}> Add Post</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost
