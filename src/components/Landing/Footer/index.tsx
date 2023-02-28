import React from "react";
import EmailForm from "../EmailForm";

function Footer() {
  return (
    <footer className="flex items-center justify-center py-24 bg-neutral-800">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-2xl text-white">
          독서 관리. 다독에서 쉽게 시작하세요!
        </h1>
        <div className="text-white">
          알림을 등록하고, 가장 빠르게 오픈 소식을 받아보세요!
        </div>
        <EmailForm theme="secondary" />
      </div>
    </footer>
  );
}

export default Footer;
