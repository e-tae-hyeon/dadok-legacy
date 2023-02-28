import Logotypo from "components/@Base/Logotypo";
import React from "react";
import MyNav from "../MyNav";

function Sidebar() {
  return (
    <div className="bg-neutral-800 w-[240px] flex-col py-8 px-4 gap-8 hidden lg:flex">
      <Logotypo theme="primary" />
      <MyNav />
    </div>
  );
}

export default Sidebar;
