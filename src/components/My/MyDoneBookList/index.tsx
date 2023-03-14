import BookList from "components/Book/BookList";
import useMyDoneBooks from "hooks/useMyDoneBooks";
import React from "react";

function MyDoneBookList() {
  const { books, fetchNext } = useMyDoneBooks();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="h3">최근에 읽은 책</h1>
      <BookList books={books} />
    </div>
  );
}

export default MyDoneBookList;
