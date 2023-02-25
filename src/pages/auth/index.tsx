import { AuthActions } from "components/Auth/template";
import { Header } from "components/Global/template";
import React from "react";

function AuthPage() {
  return (
    <div>
      <Header hasNav={false} />
      <div className="flex flex-col max-w-xl px-8 py-24 mx-auto">
        <AuthActions />
      </div>
    </div>
  );
}

export default AuthPage;
