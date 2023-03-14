import Card from "components/@Base/Card";
import useReadingRecordDate from "hooks/useReadingRecordDate";
import React from "react";
import ActivityCalendar from "react-activity-calendar";

type Props = {};

function ReadingRecord() {
  const dates = useReadingRecordDate();

  return (
    <Card>
      <div className="p-4">
        <ActivityCalendar
          data={dates}
          hideColorLegend
          hideMonthLabels
          hideTotalCount
        />
      </div>
    </Card>
  );
}

export default ReadingRecord;
