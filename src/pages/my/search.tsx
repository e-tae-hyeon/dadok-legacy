import Layout from "components/Global/Layout";
import SearchBookBar from "components/Search/SearchBookBar";
import SearchBookResult from "components/Search/SearchBookResult";
import { GetServerSideProps } from "next";
import React from "react";

function BookSearchPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <SearchBookBar />
        <SearchBookResult />
      </div>
    </Layout>
  );
}

export default BookSearchPage;

export const getServerSideProps: GetServerSideProps = async ({
  query: { keyword },
}) => ({ props: { keyword: keyword ?? null } });
