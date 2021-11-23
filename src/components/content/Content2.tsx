import React, { Dispatch, FC, SetStateAction } from "react";
import Header from "../header/Header";

interface Content1Props {
  setTabIndex: Dispatch<SetStateAction<number>>;
  tabIndex: number;
}

const Content2: FC<Content1Props> = ({ setTabIndex, tabIndex }) => {
  return (
    <div>
      <Header setTabIndex={setTabIndex} tabIndex={tabIndex} />
      Content2
    </div>
  );
};

export default Content2;
