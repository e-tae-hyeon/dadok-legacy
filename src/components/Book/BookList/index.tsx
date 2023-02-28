import { Book } from "apis/types";
import React from "react";
import BookCard from "../BookCard";

type Props = {
  books: Book[];
};

function BookList({ books }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 ">
      {books.map((book) => (
        <BookCard book={book} key={book.isbn} />
      ))}
    </div>
  );
}

export default BookList;
