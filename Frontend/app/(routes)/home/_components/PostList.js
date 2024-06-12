import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';

function PostList() {
    const [postList, setPostList] = useState([]);
    useEffect(()=>{
        getAllPosts()
    },[])
    const getAllPosts=()=>{
        GlobalApi.getAllPosts().then(resp=>{
            console.log(resp)
            setPostList(resp.data)
        })
    }
  return (
    <div>
      {postList&&postList.map((item,index)=>(
        <div key={index}>
            <PostItem post={item} />
        </div>
      ))}
    </div>
  )
}

export default PostList
