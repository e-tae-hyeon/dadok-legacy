import Layout from "components/Global/Layout";
import MyDoingBookList from "components/My/MyDoingBookList";
import MyDoneBookList from "components/My/MyDoneBookList";
import MyProfile from "components/My/MyProfile";
import MyReadingRecord from "components/My/MyReadingRecord";
import React from "react";

function MyHomePage() {
  return (
    <Layout>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-8 md:flex-row">
          <MyProfile />
          <MyReadingRecord />
        </div>
        <MyDoingBookList />
        <MyDoneBookList />
      </div>
    </Layout>
  );
}

export default MyHomePage;
