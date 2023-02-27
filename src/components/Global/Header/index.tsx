import Logotypo from "components/@Base/Logotypo";
import Link from "next/link";
import React from "react";
import HeaderNav from "../HeaderNav";

type Props = {
  hasNav?: boolean;
};

function Header({ hasNav = true }: Props) {
  return (
    <header className="sticky flex items-center justify-between p-4">
      <Link href="/">
        <Logotypo />
      </Link>
      {hasNav && <HeaderNav />}
    </header>
  );
}

export default Header;
