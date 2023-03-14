import { useQuery } from "@tanstack/react-query";
import { getMyBooks } from "apis/book";

function useMyDoingBooks() {
  const { data } = useQuery(["myDoingBooks"], () =>
    getMyBooks({ status: "doing", take: 5 })
  );

  const books = data?.books ?? [];

  return { books };
}

export default useMyDoingBooks;
