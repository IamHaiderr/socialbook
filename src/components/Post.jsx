import React from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { Users } from "../dummyData";
import { useState } from "react";


export default function Post({post}) {
  
  
  
  
  const [like, setLike] = useState(post.like);
  
  const [isLiked, setisLiked] = useState(false);
  

    const likeHandler = () => {

        setLike(isLiked ? like-1 : like+1)

        setisLiked(!isLiked)
    }

  return (






    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src= {Users.filter((u) => u.id === post.userId )[0].profilePicture} alt=""
              className="postTopImg"
            />
            <span className="postUsername">


              {Users.filter((u) => u.id === post.userId )[0].username} 

            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>

        </div>
        <div className="postCenter">
          <span className="postText">
            {post?.desc}
          </span>

          <img
            src= {post.photo}
            alt=""
            className="postCenterImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpOffAltIcon htmlColor="#1877F2"  className="likeIcon" />
            <FavoriteIcon htmlColor="red" className="likeIcon"/>
            <span className="postLikeCOunter"> {like} people like it!!!</span>
          </div>
          <div className="postBottomRight">
            <CommentIcon />
            <span className="postComment"> {post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
