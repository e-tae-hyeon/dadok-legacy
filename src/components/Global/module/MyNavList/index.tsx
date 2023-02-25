import { MyNavItem } from "components/Global/base";
import React from "react";

function MyNavList() {
  return (
    <nav className="flex flex-col gap-2">
      <MyNavItem icon="home" label="홈" to="/" />
      <MyNavItem icon="bookClosed" label="나의 서재" to="/lib" />
    </nav>
  );
}

export default MyNavList;
