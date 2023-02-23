import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export type ToastConfig = {
  type: "success" | "error";
  message: string;
};

type Props = {
  config: ToastConfig | undefined;
};

function Toast({ config }: Props) {
  const { type, message } = config ?? {};

  return (
    <AnimatePresence>
      {config && (
        <motion.div
          key="toast"
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -300 }}
          className="absolute inset-0 top-0"
        >
          <div
            className={`${
              type === "success" ? "bg-green-500" : "bg-red-400"
            }  rounded-lg py-4 px-8 my-8 mx-auto max-w-[720px] w-screen text-white`}
          >
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;
