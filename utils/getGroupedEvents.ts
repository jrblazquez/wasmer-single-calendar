import { EventDataGrouped, Group, EventData } from "@/types";
import areOverlapped from "./areOverlapped";
import transformEvents from "./transformEvents";

function getGroupIndex(event: EventData, groups: Group[]): number | null {
  let groupIndex = null;

  for (let j = 0; groupIndex == null && j < groups.length; j++) {
    const group = groups[j];
    if (areOverlapped(event, group)) {
      groupIndex = j;
    }
  }

  return groupIndex;
}

function setEventColumn(
  events: EventDataGrouped[],
  i: number,
  groups: Group[]
) {
  const event = events[i];
  const group = groups[event.groupIndex];

  let validColumnIndex = null;
  for (
    let k = 0;
    validColumnIndex === null && k < group.columnsIndex.length;
    k++
  ) {
    const belonstoK = group.columnsIndex[k].every((index) => {
      return !areOverlapped(event, events[index]);
    });
    if (belonstoK) {
      validColumnIndex = k;
    }
  }
  if (validColumnIndex === null) {
    group.columnsIndex.push([i]);
    event.column = group.columnsIndex.length - 1;
  } else {
    group.columnsIndex[validColumnIndex].push(i);
    event.column = validColumnIndex;
  }
}

function setEventsWidth(events: EventDataGrouped[], groups: Group[]) {
  for (const event of events) {
    event.width = 100 / groups[event.groupIndex].columnsIndex.length;
  }
}

function insertEventInNewGroup(
  event: EventDataGrouped,
  eventIndex: number,
  groups: Group[]
) {
  groups.push({
    start: event.start,
    end: event.end,
    eventsIndex: [eventIndex],
    columnsIndex: [[eventIndex]],
  });
  event.groupIndex = groups.length - 1;
}

function insertEventInGroup(
  event: EventDataGrouped,
  eventIndex: number,
  groups: Group[],
  groupIndex: number
) {
  const group: Group = groups[groupIndex];
  groups[groupIndex] = {
    start: Math.min(group.start, event.start),
    end: Math.max(group.end, event.end),
    eventsIndex: [...group.eventsIndex, eventIndex],
    columnsIndex: group.columnsIndex,
  };
  event.groupIndex = groupIndex;
}

function getGroupedEvents(events: EventData[]): EventDataGrouped[] {
  const eventsGrouped: EventDataGrouped[] = transformEvents(events);
  const groups: Group[] = [];

  for (let i = 0; i < eventsGrouped.length; i++) {
    const event = eventsGrouped[i];
    const groupIndex = getGroupIndex(event, groups);

    if (groupIndex === null) {
      insertEventInNewGroup(event, i, groups);
    } else {
      insertEventInGroup(event, i, groups, groupIndex);
      setEventColumn(eventsGrouped, i, groups);
    }
  }

  setEventsWidth(eventsGrouped, groups);

  return eventsGrouped;
}

export default getGroupedEvents;
