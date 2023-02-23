import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Overlay from "../Overlay";

type Props = {
  isVisible: boolean;
  children: React.ReactNode;
};

function Modal({ isVisible, children }: Props) {
  return (
    <>
      <Overlay isVisible={isVisible} />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            className="absolute top-1/2 left-1/2"
          >
            <div className="p-4 -translate-x-1/2 -translate-y-1/2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Modal;
