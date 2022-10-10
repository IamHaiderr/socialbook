import React from "react";
import "./homepage.css";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";

export default function HomePage() {
  return (
    <>
      <TopBar />

      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}
