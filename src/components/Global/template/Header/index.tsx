import { Logotypo } from "components/@base";
import React from "react";

function Header() {
  return (
    <header className="sticky flex items-center justify-between p-4">
      <Logotypo />
    </header>
  );
}

export default Header;
