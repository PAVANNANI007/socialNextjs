'use client'

import React from 'react'
import Banner from './_components/Banner'
import { useUser } from '@clerk/nextjs'
import WritePost from './_components/WritePost'
import PostList from './_components/PostList'

function Home() {
  const user = useUser()
  return (
    <div className='p-5 px-10'>
      {!user?
      <Banner/>:<WritePost/>}
      <PostList/>
    </div>

  )
}

export default Home