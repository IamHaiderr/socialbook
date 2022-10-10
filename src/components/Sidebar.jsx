import React from "react";
import "./sidebar.css";
import RssFeed from "@mui/icons-material/RssFeed";
import Chat from "@mui/icons-material/Chat";
import Video from "@mui/icons-material/PlayCircleFilled";
import Group from "@mui/icons-material/Group";
import Bookmark from "@mui/icons-material/Bookmark";
import Question from "@mui/icons-material/HelpOutline";
import Work from "@mui/icons-material/Work";
import Event from "@mui/icons-material/Event";
import Courses from "@mui/icons-material/School";

export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItems">
            <Video className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItems">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItems">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItems">
            <Question className="sidebarIcon" />
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItems">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Work</span>
          </li>
          <li className="sidebarListItems">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItems">
            <Courses className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarbtn">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="https://images.unsplash.com/photo-1617069470302-9b5592c80f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=328&q=80"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">
                Jane Doe
            </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">
                Dany
            </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://images.unsplash.com/photo-1552954277-0c45bd503b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">
                Elliana
            </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://images.unsplash.com/photo-1508606572321-901ea443707f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">
                Shakira
            </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://images.unsplash.com/photo-1533729590644-695ded775a63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">
                Shaminy
            </span>
          </li> 
          <li className="sidebarFriend">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">
                Sonam
            </span>
          </li> 
          <li className="sidebarFriend">
            <img
              src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">
                Neerum
            </span>
          </li> 
          <li className="sidebarFriend">
            <img
              src="https://images.unsplash.com/photo-1617069470302-9b5592c80f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=328&q=80"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">
                Jane Doe
            </span>
          </li> 
          <li className="sidebarFriend">
            <img
              src="https://images.unsplash.com/photo-1628196237219-9d0ab2abeee1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">
                Shubanna
            </span>
          </li> 
          <li className="sidebarFriend">
            <img
              src="https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">
                Laraiby
            </span>
          </li> 
          <li className="sidebarFriend">
            <img
              src="https://images.unsplash.com/photo-1617069470302-9b5592c80f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=328&q=80"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">
                Jane Doe
            </span>
          </li>     
        </ul>
      </div>
    </div>
  );
}
