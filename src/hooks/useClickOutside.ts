import { useEffect, useRef } from "react";

function useClickOutside<T extends HTMLElement = HTMLElement>(
  handler: () => void
) {
  const ref = useRef<T>(null);

  const handleClick = (e: Event) => {
    if (!ref.current || ref.current.contains(e.target as Node)) return;
    handler();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return { ref };
}

export default useClickOutside;
