import palette from "common/styles/palette";
import React from "react";
import * as Icons from "./icons";

type Props = {
  name: keyof typeof Icons;
  color?: string;
  size?: number;
};

function SvgIcon({ name, color = palette.black, size = 24 }: Props) {
  const Icon = Icons[name];

  return <Icon color={color} width={size} height={size} />;
}

export default SvgIcon;
