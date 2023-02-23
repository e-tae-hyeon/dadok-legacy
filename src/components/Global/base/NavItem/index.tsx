import palette from "common/styles/palette";
import { SvgIcon } from "components/@base";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  label: string;
  icon: "home" | "bookClosed";
  to: string;
};

function NavItem({ label, icon, to }: Props) {
  const { asPath } = useRouter();

  return (
    <Link
      href={asPath + to}
      type="button"
      className="flex items-center gap-2 p-4 duration-150 rounded-lg hover:bg-neutral-700"
    >
      <SvgIcon name={icon} color={palette.primary} />
      <div className="text-white">{label}</div>
    </Link>
  );
}

export default NavItem;
