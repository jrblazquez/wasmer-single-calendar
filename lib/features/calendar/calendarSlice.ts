import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import createHours from "../../../utils/createHours";
import { EventDataGrouped } from "../../../types";

interface CalendarSliceState {
  start: string;
  end: string;
  step: number;
  hours: number[];
  events: EventDataGrouped[];
}

const initialState: CalendarSliceState = {
  start: "9:00",
  end: "21:00",
  step: 30,
  hours: createHours("9:00", "21:00", 30),
  events: [],
};

export const calendarSlice = createAppSlice({
  name: "calendar",
  initialState,
  reducers: (create) => ({
    layOutDay: create.reducer(
      (state, action: PayloadAction<EventDataGrouped[]>) => {
        state.events = action.payload;
      }
    ),
  }),
  selectors: {
    selectEvents: (calendar) => calendar.events,
    selectHours: (calendar) => calendar.hours,
    selectStep: (calendar) => calendar.step,
    selectStart: (calendar) => calendar.start,
    selectEnd: (calendar) => calendar.end,
    selectHourHeight: (calendar) => 100 / calendar.hours.length,
  },
});

export const {
  selectEvents,
  selectHours,
  selectHourHeight,
  selectStep,
  selectStart,
  selectEnd,
} = calendarSlice.selectors;
export const { layOutDay } = calendarSlice.actions;
