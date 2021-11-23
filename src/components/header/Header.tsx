import React, { Dispatch, FC, SetStateAction } from "react";
import Title from "../title/Title";
import "./header.scss";
import Navbar from "./navbar/Navbar";

interface HeaderProps {
  setTabIndex: Dispatch<SetStateAction<number>>;
  tabIndex: number;
}

const Header: FC<HeaderProps> = ({ setTabIndex, tabIndex }) => {
  return (
    <div className="header__container">
      <Title title="Courses" className="header__container__title" />
      <Navbar setTabIndex={setTabIndex} tabIndex={tabIndex} />
    </div>
  );
};

export default Header;
