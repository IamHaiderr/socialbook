import React from "react";
import "./topbar.css";
import Search from "@mui/icons-material/Search";
import Person from "@mui/icons-material/Person";
import Chat from "@mui/icons-material/Chat";
import Notifications from "@mui/icons-material/Notifications";

export default function TopBar() {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">SOCIALBOOK</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for a post or Video!!!"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarlinks">
            <div className="topbarlink">Homepage</div>
            <div className="topbarlink">Timeline</div>
          </div>

          <div className="topbaricons">
            <div className="topbariconitem">
              <Person />
              <span className="topbariconbadge">1</span>
            </div>
            <div className="topbariconitem">
              <Chat />
              <span className="topbariconbadge">2</span>
            </div>
            <div className="topbariconitem">
              <Notifications />
              <span className="topbariconbadge">5</span>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1639332519079-53721293e39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=613&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
