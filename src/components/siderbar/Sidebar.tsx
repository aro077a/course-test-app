import { Dispatch, FC, SetStateAction } from "react";
import customer from "../../assets/icons/customer.png";
import dashboardInterface from "../../assets/icons/dahsboardInterface.png";
import shoppingList from "../../assets/icons/shoppingList.png";

import "./sidebar.scss";

interface SidebarProps {
  setTabIndex: Dispatch<SetStateAction<number>>;
  tabIndex: number;
}

const Sidebar: FC<SidebarProps> = ({ setTabIndex, tabIndex }) => {
  return (
    <div className="sidebar__container">
      <div className="sidebar__container__content">
        <div
          onClick={() => setTabIndex(0)}
          className="sidebar__container__content--item"
        >
          <img src={dashboardInterface} alt="dashboard-interface" />
        </div>
        <div
          onClick={() => setTabIndex(1)}
          className="sidebar__container__content--item"
        >
          <img src={shoppingList} alt="shopping-list" />
        </div>
        <div
          onClick={() => setTabIndex(2)}
          className="sidebar__container__content--item"
        >
          <img src={customer} alt="customer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
