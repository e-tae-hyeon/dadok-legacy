export type SearchBookResult = {
  meta: {
    total_count: number;
    is_end: boolean;
  };
  documents: KakaoBook[];
};

export type KakaoBook = {
  title: string;
  authors: string[];
  isbn: string;
  thumbnail: string;
};

export type Book = {
  isbn: string;
  title: string;
  author: string;
  thumbnail: string;
};

export type CreateBookParams = Book & {
  status: BookStatus;
};

export type BookStatus = "todo" | "doing" | "done";
