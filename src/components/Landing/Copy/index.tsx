import React from "react";

export type CopyProps = {
  title: string;
  description: string;
};

function Copy({ title, description }: CopyProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">{title}</h1>
      <p className="text-xl text-neutral-400">{description}</p>
    </div>
  );
}

export default Copy;
