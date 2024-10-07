"use client";

import {
  selectHours,
  selectEnd,
  selectStart,
} from "@/lib/features/calendar/calendarSlice";
import { useAppSelector } from "@/lib/hooks";
import convertHourStringToMinutes from "../../../utils/convertHourStringToMinutes";
import styles from "./Hours.module.css";
import Hour from "../Hour";

const Hours = () => {
  const hours = useAppSelector(selectHours);
  const start = useAppSelector(selectStart);
  const end = useAppSelector(selectEnd);

  return (
    <div className={styles.hours}>
      {hours.map((hour: number) => (
        <Hour key={hour} hour={hour} />
      ))}
      <Hour hour={convertHourStringToMinutes(start, end)} />
    </div>
  );
};

export default Hours;
