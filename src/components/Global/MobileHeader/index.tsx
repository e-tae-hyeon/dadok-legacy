import Logotypo from "components/@Base/Logotypo";
import React from "react";

function MobileHeader() {
  return (
    <header className="flex items-center justify-center p-4 bg-white border-b lg:hidden border-neutral-200">
      <Logotypo size="small" />
    </header>
  );
}

export default MobileHeader;
