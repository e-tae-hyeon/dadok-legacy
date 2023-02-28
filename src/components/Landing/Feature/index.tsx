import React from "react";
import Copy, { CopyProps } from "../Copy";

type Props = {
  copyLocation?: "left" | "right";
  copy: CopyProps;
  image: React.ReactNode;
};

function Feature({ copyLocation = "left", copy, image }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 py-24 xl:flex-row xl:gap-8">
      <div className={copyLocation === "left" ? "xl:-order-1" : "xl:order-5"}>
        <Copy {...copy} />
      </div>
      {image}
    </div>
  );
}

export default Feature;
