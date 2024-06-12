import React from 'react'
import Image from 'next/image'
import moment from 'moment'

function PostItem({post}) {
  return (
    <div className='p-5 border rounded-lg my-5'>
      <div className='flex gap-5 items-center'>
        <Image src={post?.createdBy.image}
        alt="user-image" width={35} height={35}
        className='rounded-full'
         />
      </div>
      <div>
        <h2 className='font-bold'>{post?.createdBy.name}</h2>
        <h2 className='text-[12px] text-grey-100'>{moment(Number(post?.createdAt)).format('DD MMM | hh:mm A')}</h2>
      </div>
      <div className='bg-slate-100 p-3 mt-4 rounded-lg'>
        <h2 className='text-[14px]'>{post.postText}</h2>
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

      </div>
    </div>
  )
}

export default PostItem
