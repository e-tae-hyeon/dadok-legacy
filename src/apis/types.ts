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

export type BookItem = Book & {
  id: number;
  status: BookStatus;
  startedAt: string | null;
  endedAt: string | null;
};

export type Proflie = {
  userId: number;
  name: string;
  description?: string;
};

export type GetMyBooksParams = {
  status: BookStatus;
  lastId?: number;
  take?: number;
};

export type GetMyBooksResult = {
  books: BookItem[];
  pageInfo: PageInfo;
};

export type PageInfo = {
  endCursor: number | null;
  hasNextPage: boolean;
};
