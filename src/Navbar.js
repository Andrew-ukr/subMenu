import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { UseGlobalAppContext } from "./context";
import sublinks from "./data";

const Navbar = () => {
  const { showSideBar, showSubMenu, hideSubMenu } = UseGlobalAppContext();
  
  return (
    <nav className="nav" onMouseOver={(e) => hideSubMenu(e)}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="btn toggle-btn" onClick={showSideBar}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map(({ page }, i) => {
            return (
              <li key={i}>
                <button
                  className="link-btn"
                  onMouseOver={(e) => {
                    showSubMenu(e);
                  }}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
