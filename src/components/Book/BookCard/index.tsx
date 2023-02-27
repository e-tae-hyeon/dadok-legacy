import { Book } from "apis/types";
import Card from "components/@Base/Card";
import React from "react";
import BookBringLibButton from "../BookBringLibButton";
import BookImage from "../BookImage";
import BookInfo from "../BookInfo";

type Props = {
  book: Book;
};

function BookCard({ book }: Props) {
  const { thumbnail, title, authors, isbn } = book;

  return (
    <Card>
      <div className="flex gap-4 px-4 py-6">
        <BookImage imageSrc={thumbnail} alt={title} />
        <div className="flex flex-col justify-between flex-1">
          <BookInfo title={title} author={authors[0]} />
          <BookBringLibButton />
        </div>
      </div>
    </Card>
  );
}

export default BookCard;
