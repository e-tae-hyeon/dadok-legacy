import { useInfiniteQuery } from "@tanstack/react-query";
import { searchBook } from "apis/search";
import { Book } from "apis/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

function useSearchBook() {
  const { push, pathname, query } = useRouter();
  const [keyword, setKeyword] = useState((query.keyword as string) ?? "");
  const [debouncedKeyword] = useDebounce(query.keyword as string, 500);

  useEffect(() => {
    push({
      pathname,
      query: { keyword },
    });
  }, [keyword]);

  const { data, hasNextPage, isLoading, fetchNextPage } = useInfiniteQuery(
    ["searchBook", debouncedKeyword],
    ({ pageParam = 1 }) => searchBook(debouncedKeyword, pageParam),
    {
      enabled: debouncedKeyword !== "",
      getNextPageParam: (last, all) =>
        last.meta.is_end ? null : all.length + 1,
    }
  );

  const books =
    data?.pages.flatMap((page) =>
      page.documents.map((book) => ({ ...book, author: book.authors[0] }))
    ) ?? ([] as Book[]);

  const fetchNextResult = () => {
    if (!hasNextPage) return;
    if (isLoading) return;
    fetchNextPage();
  };

  return { keyword, setKeyword, books, fetchNextResult };
}

export default useSearchBook;
