import React, { useState, useRef, useEffect } from "react";
import { UseGlobalAppContext } from "./context";

const Submenu = () => {
  const { isShowSubmenu, currentSubMenu, position } = UseGlobalAppContext();
  const [colomn, setColomn] = useState(0);
  const refSubmenu = useRef(null);

  useEffect(() => {
    const colomn = currentSubMenu.links.length;
    if (colomn > 4) {
      setColomn(4);
    } else {
      setColomn(colomn);
    }

    refSubmenu.current.style.left = `${position}px`;
  }, [currentSubMenu, isShowSubmenu, position]);

  return (
    <aside
      className={isShowSubmenu ? "submenu show" : "submenu"}
      ref={refSubmenu}
    >
      <h4>{currentSubMenu.page}</h4>
      <div className={`submenu-center col-${colomn}`}>
        {currentSubMenu.links.map(({ url, icon, label }, i) => {
          return (
            <a key={i} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
