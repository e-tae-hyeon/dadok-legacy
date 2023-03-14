import { add, format, isBefore, sub } from "date-fns";
import { useMemo } from "react";
import { CalendarData } from "react-activity-calendar";
import useBreakPoint from "./useBreakPoint";

const endDate = new Date();

const subtractBy = {
  desktop: 12,
  mobile: 5,
};

function useReadingRecordDate() {
  const { isDesktop } = useBreakPoint();
  const media = isDesktop ? "desktop" : "mobile";

  const dates = useMemo(() => {
    let startDate = sub(endDate, { months: subtractBy[media] });
    const dateArr: CalendarData = [];

    while (isBefore(startDate, endDate)) {
      dateArr.push({
        date: format(startDate, "yyyy-MM-dd"),
        count: 0,
        level: 0,
      });
      startDate = add(startDate, { days: 1 });
    }

    return dateArr;
  }, [endDate]);

  return dates;
}

export default useReadingRecordDate;
