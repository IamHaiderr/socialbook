import React from "react";
import "./rightbar.css";

export default function RightBar() {
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            src="https://images.unsplash.com/photo-1625649611137-df49dc542f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt=""
            className="birthdayImg"
          />

          <span className="birthdayText">
            <b>Mian Haider Ali</b> and <b>2 others</b> have birthday today!
          </span>
        </div>

        <img
          src="https://images.unsplash.com/photo-1557458491-86ffcaa94cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
          alt=""
          className="rightbarAd"
        />

        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80"
                alt=""
                className="rightbarProfileImg"
              />

              <span className="rightbarOnline"></span>

              <span className="rightbarUsername">
                Jeph Bezos
              </span>
            </div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="rightbarProfileImg"
              />

              <span className="rightbarOnline"></span>

              <span className="rightbarUsername">
                Elon Musk
              </span>
            </div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="rightbarProfileImg"
              />

              <span className="rightbarOnline"></span>

              <span className="rightbarUsername">
                Satoshi Nakamoto
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
