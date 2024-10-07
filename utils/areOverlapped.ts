import { EventData } from "../types";

function areOverlapped(eventA: EventData, eventB: EventData) {
  return (
    (eventA.start >= eventB.start && eventA.start < eventB.end) ||
    (eventB.start >= eventA.start && eventB.start < eventA.end)
  );
}

export default areOverlapped;
