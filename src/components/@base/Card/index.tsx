import React from "react";

type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return <div className="bg-white rounded-lg shadow">{children}</div>;
}

export default Card;
