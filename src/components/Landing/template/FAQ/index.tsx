import React from "react";

function FAQ() {
  return (
    <div className="flex flex-col justify-between gap-4 py-24 xl:flex-row">
      <div>
        <h1 className="text-2xl">자주 묻는 질문</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-xl">어떻게 이용하면 되나요?</h2>
          <p className="text-neutral-400">
            다독은 웹 어플리케이션 서비스로 PC에서 이용하는 것을 권장합니다.
          </p>
        </div>
        <div>
          <h2 className="text-xl">가격은 얼마인가요?</h2>
          <p className="text-neutral-400">무료입니다.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
