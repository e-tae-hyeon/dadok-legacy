import { useQueryClient } from "@tanstack/react-query";
import { createBook } from "apis/book";
import { Book, BookStatus } from "apis/types";
import { toast } from "react-toastify";

function useBringBook() {
  const queryClient = useQueryClient();

  const bringBook = async ({
    book,
    status,
  }: {
    book: Book;
    status: BookStatus;
  }) => {
    try {
      await createBook({ ...book, status });
      await queryClient.invalidateQueries({ queryKey: ["myBookIsbns"] });
      toast.success("나의 서재로 등록 완료!");
    } catch (err) {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  return { bringBook };
}

export default useBringBook;
