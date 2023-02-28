import React from "react";
import BottomTab from "../BottomTab";
import Sidebar from "../Sidebar";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <Sidebar />
      <div id="content" className="flex-1 p-4 overflow-scroll lg:p-12">
        {children}
      </div>
      <BottomTab />
    </div>
  );
}

export default Layout;
