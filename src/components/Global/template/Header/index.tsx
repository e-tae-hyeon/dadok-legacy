import { Logotypo } from "components/@base";
import { HeaderNavList } from "components/Global/module";
import React from "react";

type Props = {
  hasNav?: boolean;
};

function Header({ hasNav = true }: Props) {
  return (
    <header className="sticky flex items-center justify-between p-4">
      <Logotypo />
      {hasNav && <HeaderNavList />}
    </header>
  );
}

export default Header;
