import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: "primary" | "secondary";
};

function Button({ theme = "primary", ...rest }: ButtonProps) {
  const { bgColor, textColor } = themeMap[theme];

  return (
    <button
      type="button"
      className={`${bgColor} ${textColor} px-4 py-3 rounded-lg flex items-center gap-2 justify-center`}
      {...rest}
    />
  );
}

export default Button;

const themeMap = {
  primary: {
    bgColor: "bg-neutral-800",
    textColor: "text-white",
  },
  secondary: {
    bgColor: "bg-neutral-200",
    textColor: "text-black",
  },
};
