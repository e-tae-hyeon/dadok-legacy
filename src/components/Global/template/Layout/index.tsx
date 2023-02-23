import React from "react";
import Sidebar from "../Sidebar";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default Layout;
