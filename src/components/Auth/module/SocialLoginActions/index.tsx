import { SocialProvider } from "components/Auth/base";
import React from "react";

function SocialLoginActions() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <SocialProvider provider="kakao" />
    </div>
  );
}

export default SocialLoginActions;
