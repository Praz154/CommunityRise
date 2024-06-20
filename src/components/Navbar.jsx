import React from "react";
import "../navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="NavBar">
        <div className="NavBarTop">
          <div className="NavBarTitle">
            <b>CommunityRise</b>
          </div>
          <div className="NavBarItem">
            <ul className="NavBarItemList">
              <li>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li>Discussions</li>
              <li>
                <button>
                  <Link
                    to="signup"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Sign Up
                  </Link>
                </button>
              </li>
              <li>
                <button>
                  <Link
                    to="register"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Register
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="NavBarBottom">
          <div className="NavBarSearch">
            <span className="material-symbols-outlined"> search </span>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
