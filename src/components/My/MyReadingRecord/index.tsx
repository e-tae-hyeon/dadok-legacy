import ReadingRecord from "components/User/ReadingRecord";
import React from "react";

function MyReadingRecord() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="h3">리딩레코드</h1>
      <ReadingRecord />
    </div>
  );
}

export default MyReadingRecord;
