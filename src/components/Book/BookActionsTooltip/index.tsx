import { Book } from "apis/types";
import { AnimatePresence, motion } from "framer-motion";
import useClickOutside from "hooks/useClickOutside";
import React from "react";
import BookBringActions from "../BookBringActions";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  book: Book;
  actions: "bring" | "my";
};

function BookActionsTooltip({ isVisible, onClose, book, actions }: Props) {
  const { ref } = useClickOutside<HTMLDivElement>(onClose);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="book-actions-tooltip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center drop-shadow backdrop-blur-sm"
        >
          <div ref={ref} className="px-4 py-2 bg-white rounded-lg">
            <div onClick={onClose}>
              {actions === "bring" ? <BookBringActions book={book} /> : null}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BookActionsTooltip;
