import React from "react";
import { FaTimes } from "react-icons/fa";
import { UseGlobalAppContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  const { isShowSidebar, hideSideBar } = UseGlobalAppContext();

  return (
    <div className={isShowSidebar ? "sidebar-wrapper show" : "sidebar-wrapper"}>
      <aside className="sidebar">
        <button className="close-btn" onClick={hideSideBar}>
          <FaTimes></FaTimes>
        </button>
        <div className="sidebar-links">
          {sublinks.map((sublink, i) => {
            const { page } = sublink;
            return (
              <article key={i}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {sublink.links.map(({ url, label, icon }, i) => {
                    return (
                      <a key={i} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
