import { Logo } from "components/Global/base";
import { NavList } from "components/Global/module";
import React from "react";

function Sidebar() {
  return (
    <div className="bg-neutral-800 w-[240px] min-h-screen flex flex-col py-8 px-4 gap-8">
      <Logo />
      <NavList />
    </div>
  );
}

export default Sidebar;
