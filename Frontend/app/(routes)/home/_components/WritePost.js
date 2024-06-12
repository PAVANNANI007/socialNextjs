import { UserDetailContext } from "@/app/_context/UserDetailContext";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Image, Send, Video } from "lucide-react";
import React, { useContext, useState } from "react";

function WritePost() {
  const { user } = useUser();
  const [userInputPost, setUserInputPost] = useState(""); // Correctly use useState
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  console.log(userDetail)
  const onCreatePost = () => {
    const data = {
      postText: userInputPost,
      createdAt: Date.now().toString(),
      createdBy: userDetail._id,
    };
    GlobalApi.createPost(data).then((resp) => {
        setUserInputPost("")
    });
  };

  if (!user) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <div>
      <h2 className="text-[30px] font-medium text-grey-600">
        Hello, {user.fullName}
      </h2>
      <h2 className="text-grey-400">
        What's new with you? Would you like to share something with the community?
      </h2>
      <div className="p-3 mt-5 border rounded-lg bg-slate-100">
        <h2>Create Post</h2>
        <div className="p-4 bg-white rounded-lg mt-2">
          <textarea
            className="outline-none w-full"
            placeholder="What's new"
            value={userInputPost}
            onChange={(e) => setUserInputPost(e.target.value)}
          />
        </div>
        <div className="mt-2 flex justify-between">
          <div className="flex gap-5">
            <h2 className="flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-lg">
              <Image /> Image
            </h2>
            <h2 className="flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-lg">
              <Video /> Video
            </h2>
          </div>
          <Button
            className="bg-blue-500 rounded-xl gap-2 hover:bg-blue-700"
            disabled={!userInputPost?.length}
            onClick={onCreatePost}
          >
            <Send className="h-4 w-4" /> Publish
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WritePost;
