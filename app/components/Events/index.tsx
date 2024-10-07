"use client";

import { selectEvents } from "@/lib/features/calendar/calendarSlice";

import { useAppSelector } from "@/lib/hooks";
import styles from "./Events.module.css";
import Event from "../Event";

const Events = () => {
  const events = useAppSelector(selectEvents);

  return (
    <div className={styles.events}>
      <div className={styles.eventsBox}>
        {events.map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
