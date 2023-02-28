import React from "react";
import BottomTabItem from "../BottomTabItem";

function BottomTab() {
  return (
    <div className="flex items-center px-2 py-3 text-white bg-neutral-800 lg:hidden">
      <BottomTabItem tab="home" />
      <BottomTabItem tab="search" />
      <BottomTabItem tab="lib" />
      <BottomTabItem tab="settings" />
    </div>
  );
}

export default BottomTab;
