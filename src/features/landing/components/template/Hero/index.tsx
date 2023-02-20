import Image from "next/image";
import React from "react";
import { EmailForm } from "../../module";

function Hero() {
  return (
    <section className="flex flex-col justify-between gap-8 py-8 xl:flex-row ">
      <div className="flex flex-col justify-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-[3rem]">독서 관리는 다독으로.</h1>
          <h2 className="text-3xl">온라인 독서 관리 서비스</h2>
        </div>
        <div className="flex flex-col gap-4">
          <EmailForm />
          <div>알림을 등록하고, 가장 빠르게 오픈 소식을 받아보세요!</div>
        </div>
      </div>
      <div>
        <Image
          src="/images/home.png"
          width={720}
          height={512}
          alt="dadok main home"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
