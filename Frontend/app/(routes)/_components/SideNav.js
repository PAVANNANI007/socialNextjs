"use client";
import MenuList from "@/app/_utils/MenuList";
import { Button } from "@/components/ui/button";
import { LogIn, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";

function SideNav({ toggleSideBar }) {
  const { user } = useUser();
  return (
    <div className="h-full p-5 border">
      <div className="md:block hidden mb-10">
        <Image src="/logo.svg" alt="logo" width={150} height={50} />
      </div>
      <div className="flex flex-col mt-10">
        {MenuList.map((item, index) => (
          <Link href={item.path} onClick={() => toggleSideBar(false)} key={index}>
            <h2
              variant="ghost"
              className="group p-4 flex gap-5 items-center
                justify-start rounded-md cursor-pointer
                 hover:bg-slate-100 text-slate-500"
            >
              <item.icon className="group-hover:animate-bounce" />
              {item.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 flex gap-3 items-center">
        <div className="flex items-center gap-3">
          <div>
            {!user ? (
              <Link href="sign-in">
                <Button
                  variant="ghost"
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <LogIn />
                  Sign In
                </Button>
              </Link>
            ) : (
              <UserButton />
            )}
          </div>
          <div>
            <h4>Profile</h4>
          </div>
        </div>
      </div>
      {/* Close Button */}
      <button
        className="md:hidden absolute top-3 right-3 bg-gray-100 p-2 rounded-full"
        onClick={() => toggleSideBar(false)}
      >
        <X className="h-6 w-6 text-slate-500" />
      </button>
    </div>
  );
}

export default SideNav;
