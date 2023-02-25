import React from "react";

type Props = {
  size?: "large" | "medium" | "small";
  theme?: "primary" | "black";
};

function Logotypo({ size = "medium", theme = "black" }: Props) {
  return (
    <h1
      className={`${sizeMap[size]} ${
        theme === "primary" ? "text-white" : "text-black"
      } text-center`}
    >
      <span className={theme === "primary" ? "text-amber-100" : "text-"}>
        da
      </span>
      dok
    </h1>
  );
}

export default Logotypo;

const sizeMap = {
  large: "hero",
  medium: "h2",
  small: "h3",
};
