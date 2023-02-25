import { SocialLoginActions } from "components/Auth/module";
import React from "react";

function AuthActions() {
  return (
    <div className="flex flex-col justify-center gap-8 text-center">
      <div>
        <h1 className="hero">dadok</h1>
        <h2 className="h2">온라인 독서 관리 서비스</h2>
      </div>
      <SocialLoginActions />
    </div>
  );
}

export default AuthActions;