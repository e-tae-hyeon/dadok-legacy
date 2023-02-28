import { useQuery } from "@tanstack/react-query";
import { getMyBookIsbns } from "apis/book";

function useMyBookIsbns() {
  const { data } = useQuery(["myBookIsbns"], getMyBookIsbns);

  const myBookIsbns = data?.map((item) => item.isbn) ?? [];

  return { myBookIsbns };
}

export default useMyBookIsbns;
