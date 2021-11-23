import React, { useState } from "react";
import Sidebar from "./components/siderbar/Sidebar";
import Courses from "./components/courses/Courses";
import "./App.css";
import Content1 from "./components/content/Content1";
import Content2 from "./components/content/Content2";

function App() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const Tabs = [
    <Courses setTabIndex={setTabIndex} tabIndex={tabIndex} />,
    <Content1 setTabIndex={setTabIndex} tabIndex={tabIndex} />,
    <Content2 setTabIndex={setTabIndex} tabIndex={tabIndex} />,
  ];

  return (
    <div className="App">
      <Sidebar setTabIndex={setTabIndex} tabIndex={tabIndex} />
      {Tabs[tabIndex]}
    </div>
  );
}

export default App;
