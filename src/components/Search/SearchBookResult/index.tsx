import BookList from "components/Book/BookList";
import useObserve from "hooks/useObserve";
import useSearchBook from "hooks/useSearchBook";
import React from "react";

function SearchBookResult() {
  const { books, fetchNextResult } = useSearchBook();
  const { ref } = useObserve({
    handler: fetchNextResult,
    options: {
      root: document.querySelector("#content")!,
      rootMargin: "300px",
    },
  });

  return (
    <>
      <BookList books={books} />
      <div ref={ref} />
    </>
  );
}

export default SearchBookResult;
