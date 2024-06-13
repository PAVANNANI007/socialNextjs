'use client'

import React, { useEffect, useState } from 'react'
import Banner from './_components/Banner'
import { useUser } from '@clerk/nextjs'
import WritePost from './_components/WritePost'
import PostList from './_components/PostList'
import GlobalApi from '@/app/_utils/GlobalApi'
import { get } from 'mongoose'

function Home() {
  const {user} = useUser()
  const [postList, setPostList] = useState([]);
  useEffect(()=>{
      getAllPosts()
  },[])
  const getAllPosts=()=>{
      GlobalApi.getAllPosts().then(resp=>{
          setPostList(resp.data)
      })
  }
  return (
    <div className='p-5 px-10'>
      {!user?
      <Banner/>:<WritePost getAllPosts={()=>getAllPosts()} />}
      <PostList
       postList={postList}
        updatePostList={getAllPosts}
       />
    </div>

  )
}

export default Home