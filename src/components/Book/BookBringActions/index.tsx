import { Book, BookStatus } from "apis/types";
import useBringBook from "hooks/useBringBook";
import React from "react";
import BookActionItem from "../BookActionItem";

type Props = {
  book: Book;
};

function BookBringActions({ book }: Props) {
  const { bringBook } = useBringBook();

  const handleBringBook = (status: BookStatus) => {
    bringBook({ book, status });
  };

  return (
    <div className="flex flex-col gap-2">
      <BookActionItem
        icon="shoppingCart"
        label="읽을 거에요!"
        onClick={() => handleBringBook("todo")}
      />
      <BookActionItem
        icon="bookOpen"
        label="읽고 있어요!"
        onClick={() => handleBringBook("doing")}
      />
      <BookActionItem
        icon="bookClosed"
        label="읽었어요!"
        onClick={() => handleBringBook("done")}
      />
    </div>
  );
}

export default BookBringActions;
