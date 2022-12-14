import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">SOCIALBOOK</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on SocialBook.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Username" className="loginInput" />
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <input placeholder="Password Again" className="loginInput" />

              <Link to="/profile">
                <button className="loginButton">Sign Up</button>
              </Link>

              <Link to="/login">
                <button className="loginRegisterButton">
                  Already have Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
}
