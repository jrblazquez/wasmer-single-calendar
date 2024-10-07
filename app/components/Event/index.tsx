"use client";

import {
  selectHourHeight,
  selectStep,
} from "@/lib/features/calendar/calendarSlice";
import { useAppSelector } from "@/lib/hooks";
import styles from "./Event.module.css";
import { EventDataGrouped } from "@/types";

const Event = (event: EventDataGrouped) => {
  const hourHeight = useAppSelector(selectHourHeight);
  const step = useAppSelector(selectStep);

  const eventTop = (event.start / step) * hourHeight;
  const eventHeight = ((event.end - event.start) / step) * hourHeight;
  const eventWidth = event.width;
  const eventLeft = eventWidth * event.column;

  return (
    <div
      key={`${event.start}-${event.end}`}
      className={styles.eventBox}
      style={{
        height: `${eventHeight}%`,
        top: `${eventTop}%`,
        width: `${eventWidth}%`,
        left: `${eventLeft}%`,
      }}
    >
      <div className={styles.bar} />
      <div className={styles.event}>
        <p className={styles.title}>Sample Item</p>
        <p className={styles.subtitle}>Sample location</p>
      </div>
    </div>
  );
};

export default Event;
