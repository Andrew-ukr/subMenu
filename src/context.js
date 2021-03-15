import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [isShowSidebar, setisShowSidebar] = useState(false);
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);
  const [currentSubMenu, setCurrentSubMenu] = useState({ page: "", links: [] });
  const [position, setPosition] = useState();

  const showSideBar = () => {
    setisShowSidebar(true);
  };

  const hideSideBar = (e) => {
    e.stopPropagation();
    setisShowSidebar(false);
  };

  const showSubMenu = (e) => {
    const posData = e.target.getBoundingClientRect();
    const position = posData.x + (posData.width / 2);
    setPosition(position);
    setIsShowSubmenu(true);
    setCurrentSubMenu(
      sublinks.find((item) => item.page === e.target.textContent)
    );
  };

  const hideSubMenu = (e) => {
    if (e.target.className !== "link-btn") {
      setIsShowSubmenu(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isShowSidebar,
        isShowSubmenu,
        currentSubMenu,
        position,
        showSideBar,
        hideSideBar,
        showSubMenu,
        hideSubMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalAppContext = () => {
  return useContext(AppContext);
};
