import React from "react";
import "./feed.css";
import Post from "./Post";
import Share from "./Share";
import { Posts } from "../dummyData.js";

export default function Feed() {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />

        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
