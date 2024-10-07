"use client";
import Hours from "../Hours";
import Events from "../Events";
import styles from "./Calendar.module.css";

export const Calendar = () => {
  return (
    <div className={styles.root}>
      <Hours />
      <Events />
    </div>
  );
};
