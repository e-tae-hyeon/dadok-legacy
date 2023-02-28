import React from "react";
import MyNavItem from "../MyNavItem";

function MyNav() {
  return (
    <nav className="flex flex-col gap-4">
      <MyNavItem icon="home" label="홈" to="/my" />
      <MyNavItem icon="search" label="책 검색" to="/my/search" />
      <MyNavItem icon="bookClosed" label="나의 서재" to="/my/lib" />
    </nav>
  );
}

export default MyNav;
