import React from "react";
import SocialLoginProvider from "../SocialLoginProvider";

function SocialLogins() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <SocialLoginProvider provider="kakao" />
    </div>
  );
}

export default SocialLogins;
