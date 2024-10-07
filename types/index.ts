export interface EventData {
  start: number;
  end: number;
}

export interface EventDataGrouped {
  id: number;
  start: number;
  end: number;
  column: number;
  width: number;
  groupIndex: number;
}

export interface HourType {
  hour: number;
}

export interface Group {
  start: number;
  end: number;
  eventsIndex: number[];
  columnsIndex: number[][];
}
