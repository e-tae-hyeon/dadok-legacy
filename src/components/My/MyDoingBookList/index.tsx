import BookList from "components/Book/BookList";
import useMyDoingBooks from "hooks/useMyDoingBooks";
import React from "react";

function MyDoingBookList() {
  const { books } = useMyDoingBooks();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="h3">읽고 있는 책</h1>
      <BookList books={books} />
    </div>
  );
}

export default MyDoingBookList;
