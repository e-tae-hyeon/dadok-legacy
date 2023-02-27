import palette from "common/styles/palette";
import React from "react";
import * as Icons from "./icons";

export type IconsName = keyof typeof Icons;

type Props = {
  name: IconsName;
  color?: string;
  size?: number;
};

function SvgIcon({ name, color = palette.black, size = 24 }: Props) {
  const Icon = Icons[name];

  return <Icon color={color} width={size} height={size} />;
}

export default SvgIcon;
