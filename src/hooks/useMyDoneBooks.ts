import { useInfiniteQuery } from "@tanstack/react-query";
import { getMyBooks } from "apis/book";

function useMyDoneBooks() {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["myDoneBooks"],
    ({ pageParam }) => getMyBooks({ status: "done", lastId: pageParam }),
    {
      getNextPageParam: (last) =>
        last.pageInfo.hasNextPage ? last.pageInfo.endCursor : null,
    }
  );

  const fetchNext = () => {
    if (!hasNextPage) return;
    fetchNextPage();
  };

  const books = data?.pages.flatMap((page) => page.books) ?? [];

  return { books, fetchNext };
}

export default useMyDoneBooks;
