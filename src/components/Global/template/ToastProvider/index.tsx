import { Toast } from "components/@base";
import React, { useEffect } from "react";
import useToastStore from "stores/useToastStore";

function ToastProvider() {
  const { config, clearConfig } = useToastStore();

  useEffect(() => {
    setTimeout(() => clearConfig(), 3000);
  }, [config]);

  return <Toast config={config} />;
}

export default ToastProvider;
