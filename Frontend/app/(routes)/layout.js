"use client";
import React, { useContext, useEffect, useState } from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { useUser } from '@clerk/nextjs';
import GlobalApi from '../_utils/GlobalApi';
import { UserDetailContext } from '../_context/UserDetailContext';

function Layout({ children }) {
  const [toggleSideBar, setToggleSideBar] = useState(false);
 const {user} = useUser();
 const {userDetail, setUserDetail} = useContext(UserDetailContext)
 useEffect(()=>{
  user&&getUserDetails();
 },[user]);

  const getUserDetails=()=>{
    GlobalApi.getUserByEmail(user.primaryEmailAddress.emailAddress).then(
      (resp)=>{
        console.log(resp)
        setUserDetail(resp.data);
      }
    )
  }

  return (
    <div>
      {/* This sidebar is used when screen size is medium or larger */}
      <div className='hidden md:w-64 md:block h-screen fixed'>
        <SideNav toggleSideBar={() => setToggleSideBar(!toggleSideBar)} />
      </div>
      {/* This sidebar is used when screen size is smaller/mobile */}
      {toggleSideBar &&
        <div className='bg-white absolute z-50 md:hidden h-screen w-64 animate-in duration-700'>
          <SideNav toggleSideBar={() => setToggleSideBar(false)} />
        </div>}
        
      <div className='md:ml-64'>
        {/* Header */}
        <Header toggleSideBar={() => setToggleSideBar(!toggleSideBar)} />
        <div className='grid grid-cols-1 md:grid-cols-3'>
          {/* Main Content */}
          <div className='md:col-span-2'>
            {children}
          </div>
          {/* Right Most Section of page */}
          <div className='p-5'>Side Section</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
