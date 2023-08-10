"use client";
import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { comments } from "@/libs/comments";
import { useState } from "react";
// import { PostOwner } from "@/components/PostOwner";

export default function HomePage() {
  const [Comments, setComment] = useState([comments]);
  // setComment(comments);
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner />

        {/* Comment Example */}
        {Comments.map((user) => (
          <Comment
            key={user.username}
            userImagePath={user.userImagePath}
            username={user.username}
            commentText={user.commentText}
            likeNum={user.likeNum}
            replies={user.replies}
          />
        ))}

        {/* Reply Example */}

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
