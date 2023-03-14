import React from "react";

type Props = {
  title: string;
  author: string;
};

function BookInfo({ title, author }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="break-all body1">{title}</h3>
      <div className="body2 text-neutral-400">{author}</div>
    </div>
  );
}

export default BookInfo;
