import { Book } from "apis/types";
import Card from "components/@Base/Card";
import useBookActionsTooltip from "hooks/useBookActionsTooltip";
import React from "react";
import BookActionsTooltip from "../BookActionsTooltip";
import BookBringLibButton from "../BookBringLibButton";
import BookImage from "../BookImage";
import BookInfo from "../BookInfo";

type Props = {
  book: Book;
};

function BookCard({ book }: Props) {
  const { thumbnail, title, author } = book;
  const { isVisible, openActions, closeActions } = useBookActionsTooltip();

  return (
    <Card>
      <div className="relative flex gap-4 px-4 py-6">
        <BookImage imageSrc={thumbnail} alt={title} />
        <div className="flex flex-col justify-between flex-1">
          <BookInfo title={title} author={author} />
          <BookBringLibButton onClick={openActions} />
        </div>
        <BookActionsTooltip
          isVisible={isVisible}
          onClose={closeActions}
          book={book}
          actions="bring"
        />
      </div>
    </Card>
  );
}

export default BookCard;
