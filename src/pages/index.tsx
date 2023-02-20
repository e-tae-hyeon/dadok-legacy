import { Header } from "@shared/components/module";
import {
  FAQ,
  Feature,
  Footer,
  Hero,
} from "features/landing/components/template";
import Image from "next/image";
import React from "react";

function HomePage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <Header />
      </div>
      <div className="bg-[#FEF3C7]">
        <div className="p-4 mx-auto max-w-7xl">
          <Hero />
        </div>
      </div>
      <div className="flex flex-col gap-12 p-4 mx-auto max-w-7xl">
        <Feature
          copy={{
            title: "검색하고 쉽게 등록하세요!",
            description:
              "읽고 싶은 책. 읽고 있는 책. 읽은 책. 다독은 검색으로 쉽게 등록할 수 있어요.",
          }}
          image={
            <Image
              src="/images/search.png"
              width={720}
              height={512}
              alt="dadok book search"
              className="rounded-lg"
            />
          }
        />
        <Feature
          copy={{
            title: "나만의 방식으로 독후감을 작성해요!",
            description:
              "다독은 블럭 형식의 에디터로 원하는 양식으로 자유롭게 작성할 수 있어요.",
          }}
          copyLocation="right"
          image={
            <Image
              src="/images/write.png"
              width={720}
              height={512}
              alt="dadok book search"
              className="rounded-lg"
            />
          }
        />
        <Feature
          copy={{
            title: "한눈에 도서를 관리하세요!",
            description:
              "완독여부, 타임라인 등 다독은 간편하게 도서를 관리할 수 있어요.",
          }}
          image={
            <>
              <Image
                src="/images/ing.png"
                width={420}
                height={512}
                alt="dadok book reading card"
                className="rounded-lg"
              />
              <Image
                src="/images/done.png"
                width={420}
                height={512}
                alt="dadok book readed card"
                className="rounded-lg"
              />
            </>
          }
        />
        <Feature
          copy={{
            title: "독서 기록을 자동으로 기록해요!",
            description:
              "'내가 이번달엔 책을 얼마나 읽었지?' 다독은 자동으로 독서 시간을 기록해줘요.",
          }}
          copyLocation="right"
          image={
            <Image
              src="/images/reading-record.png"
              width={720}
              height={512}
              alt="dadok reading record"
              className="rounded-lg"
            />
          }
        />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
