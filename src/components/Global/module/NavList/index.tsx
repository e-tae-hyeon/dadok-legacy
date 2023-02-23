import { NavItem } from "components/Global/base";
import React from "react";

function NavList() {
  return (
    <nav className="flex flex-col gap-2">
      <NavItem icon="home" label="홈" to="/" />
      <NavItem icon="bookClosed" label="나의 서재" to="/lib" />
    </nav>
  );
}

export default NavList;
