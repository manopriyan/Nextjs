import React from 'react'
import axios from 'axios'
import domain from '../../utill/config'
import PostItem from '../../components/PostItem'


export default function index({postsdata}) {

  // console.log(postsdata);

  const postItems = postsdata.map((post)=> {

    return <Col key={post._id} sm="4"><PostItem post = {post}> </PostItem></col>
  })
  return (
    <div>
        <div className='text-end m-5'>
      <a className='btn btn-success' href="/posts/addpost">Create New Post</a>
        </div>
    <div className='row mt-5 justify-content-center'>
      {postItems}
    </div>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const response = await axios.get(`${domain}/posts`)

    return {
      props :{
        postsdata : response.data
      }
    }
  } catch (error) {
    console.log(error);
  }
}


