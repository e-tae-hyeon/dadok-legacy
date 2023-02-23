import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
  isVisible: boolean;
  onClick: () => void;
};

function Overlay({ isVisible, onClick }: Props) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          onClick={onClick}
          className="fixed inset-0 bg-neutral-900"
        />
      )}
    </AnimatePresence>
  );
}

export default Overlay;
