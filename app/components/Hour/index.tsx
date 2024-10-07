"use client";

import {
  selectHourHeight,
  selectStart,
} from "@/lib/features/calendar/calendarSlice";
import { useAppSelector } from "@/lib/hooks";
import styles from "./Hour.module.css";
import convertMinutesToHourString from "../../../utils/convertMinutesToHourString";
import { HourType } from "@/types";

const Hour = ({ hour }: HourType) => {
  const hourHeight = useAppSelector(selectHourHeight);
  const start = useAppSelector(selectStart);
  const [sHour, isOclock, suffix] = convertMinutesToHourString(start, hour);

  return (
    <div className={styles.hour} style={{ height: `${hourHeight}%` }}>
      {isOclock ? (
        <p className={styles.isOclockName}>
          <span>{sHour}</span> <span className={styles.suffix}>{suffix}</span>
        </p>
      ) : (
        <p className={styles.name}> {sHour}</p>
      )}
    </div>
  );
};

export default Hour;
