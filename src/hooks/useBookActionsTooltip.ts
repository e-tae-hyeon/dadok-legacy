import { useState } from "react";

function useBookActionsTooltip() {
  const [isVisible, setIsVisible] = useState(false);

  const openActions = () => setIsVisible(true);
  const closeActions = () => setIsVisible(false);

  return { isVisible, openActions, closeActions };
}

export default useBookActionsTooltip;
