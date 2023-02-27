import palette from "common/styles/palette";
import SvgIcon from "components/@Base/SvgIcon";
import Link from "next/link";
import React from "react";

type Props = {
  tab: keyof typeof tabMap;
};

function BottomTabItem({ tab }: Props) {
  const { icon, label, to } = tabMap[tab];

  return (
    <Link
      href={`my${to}`}
      className="flex flex-col items-center justify-center flex-1 gap-2"
    >
      <SvgIcon name={icon} color={palette.primary} />
      <div className="caption">{label}</div>
    </Link>
  );
}

export default BottomTabItem;

const tabMap = {
  home: {
    icon: "home" as const,
    label: "홈",
    to: "/",
  },
  search: {
    icon: "search" as const,
    label: "책 검색",
    to: "/search",
  },
  lib: {
    icon: "bookClosed" as const,
    label: "내 서재",
    to: "/lib",
  },
  settings: {
    icon: "settings" as const,
    label: "설정",
    to: "/settings",
  },
};
