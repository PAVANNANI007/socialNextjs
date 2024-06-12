"use client"
import Image from 'next/image'
import { useEffect } from 'react';
import GlobalApi from './_utils/GlobalApi';
import { UserButton, useUser } from '@clerk/nextjs';

export default function Home() {
  
  const {user} = useUser();
  useEffect(()=>{
    user&&createUserProfile();
  },[user])
  const createUserProfile=()=>{
    if(!localStorage.getItem('islogin')){
    const data={
      name:user.fullName,
      email:user.primaryEmailAddress.emailAddress,
      image: user.imageUrl
    }
    GlobalApi.createuser(data).then(resp=>{
      console.log(resp.data)
      localStorage.setItem('islogin', true)
    })}
  }

  return (
  <div>
  <UserButton/>
  </div>
  )
}
