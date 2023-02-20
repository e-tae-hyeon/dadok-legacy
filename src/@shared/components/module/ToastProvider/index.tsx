import { Toast } from "@shared/components/base";
import useToastStore from "@shared/stores/useToastStore";
import React, { useEffect } from "react";

function ToastProvider() {
  const { config, clearConfig } = useToastStore();

  useEffect(() => {
    setTimeout(() => clearConfig(), 3000);
  }, [config]);

  return <Toast config={config!} />;
}

export default ToastProvider;
