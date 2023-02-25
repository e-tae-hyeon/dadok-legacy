import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: "primary" | "secondary";
};

function Button({ theme = "primary", ...rest }: Props) {
  const { bgColor, textColor } = themeMap[theme];

  return (
    <button
      type="button"
      className={`${bgColor} ${textColor} px-8 py-4 rounded-lg`}
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
