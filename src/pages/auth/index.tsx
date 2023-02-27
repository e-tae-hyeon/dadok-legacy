import AuthGreeting from "components/Auth/AuthGreeting";
import SocialLogins from "components/Auth/SocialLogins";
import Header from "components/Global/Header";
import React from "react";

function AuthPage() {
  return (
    <div>
      <Header hasNav={false} />
      <div className="flex flex-col max-w-xl px-8 py-24 mx-auto">
        <AuthGreeting />
        <SocialLogins />
      </div>
    </div>
  );
}

export default AuthPage;
