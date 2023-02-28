import React from "react";
import Button, { ButtonProps } from "../Button";
import SvgIcon, { IconsName } from "../SvgIcon";

type IconButtonProps = ButtonProps & {
  icon: IconsName;
  iconStyle?: {
    color?: string;
    size?: number;
  };
};

function IconButton({ icon, iconStyle, children, ...rest }: IconButtonProps) {
  return (
    <Button {...rest}>
      <SvgIcon name={icon} color={iconStyle?.color} size={iconStyle?.size} />
      {children}
    </Button>
  );
}

export default IconButton;
