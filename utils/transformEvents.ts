import { EventData, EventDataGrouped } from "@/types";

function transformEvents(events: EventData[]): EventDataGrouped[] {
  return events.map((event, index) => ({
    id: index,
    start: event.start,
    end: event.end,
    column: 0,
    width: 100,
    groupIndex: 0,
  }));
}
export default transformEvents;
