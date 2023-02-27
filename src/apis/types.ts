export type SearchBookResult = {
  meta: {
    total_count: number;
    is_end: boolean;
  };
  documents: Book[];
};

export type Book = {
  title: string;
  authors: string[];
  isbn: string;
  thumbnail: string;
};
