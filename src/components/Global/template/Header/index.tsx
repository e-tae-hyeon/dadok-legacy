import { Logotypo } from "components/@base";
import { HeaderNavList } from "components/Global/module";
import Link from "next/link";
import React from "react";

type Props = {
  hasNav?: boolean;
};

function Header({ hasNav = true }: Props) {
  return (
    <header className="sticky flex items-center justify-between p-4">
      <Link href="/">
        <Logotypo />
      </Link>
      {hasNav && <HeaderNavList />}
    </header>
  );
}

export default Header;
