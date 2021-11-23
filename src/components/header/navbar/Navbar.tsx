import React, { Dispatch, FC, SetStateAction } from "react";
import "./navbar.scss";

interface NavbarProps {
  setTabIndex: Dispatch<SetStateAction<number>>;
  tabIndex: number;
}

const Navbar: FC<NavbarProps> = ({ setTabIndex, tabIndex }) => {
  return (
    <ul className="navbar__container">
      <li
        className={
          tabIndex === 0
            ? "navbar__container--itemActive"
            : "navbar__container--item"
        }
        onClick={() => setTabIndex(0)}
      >
        Popular
      </li>
      <li
        className={
          tabIndex === 1
            ? "navbar__container--itemActive"
            : "navbar__container--item"
        }
        onClick={() => setTabIndex(1)}
      >
        Favorite
      </li>
      <li
        className={
          tabIndex === 2
            ? "navbar__container--itemActive"
            : "navbar__container--item"
        }
        onClick={() => setTabIndex(2)}
      >
        New
      </li>
    </ul>
  );
};

export default Navbar;
