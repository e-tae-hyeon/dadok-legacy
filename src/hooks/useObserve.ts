import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  handler: () => void;
  options?: {
    root?: Element;
    rootMargin?: string;
  };
};

function useObserve({ handler, options }: Props) {
  const { ref, inView } = useInView({
    root: options?.root,
    rootMargin: options?.rootMargin,
  });

  useEffect(() => {
    if (inView) handler();
  }, [inView]);

  return { ref };
}

export default useObserve;
