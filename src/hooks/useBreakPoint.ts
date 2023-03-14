import { useMediaQuery } from "react-responsive";

function useBreakPoint() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return { isDesktop, isTablet };
}

export default useBreakPoint;
