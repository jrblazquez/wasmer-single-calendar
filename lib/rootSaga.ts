import { takeEvery, put } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { layOutDay } from "./features/calendar/calendarSlice";
import getGroupedEvents from "../utils/getGroupedEvents";

function* layOutDayWatcher(event: { detail: EventType[] }) {
  const events = getGroupedEvents(event.detail);
  yield put(layOutDay(events));
}

interface EventType {
  start: number;
  end: number;
}

declare global {
  interface Window {
    layOutDay: (events: EventType[]) => void;
    gtag: (...args: any[]) => void;
  }
}

if (typeof window !== "undefined") {
  window.layOutDay = function (events: EventType[]) {
    const event = new CustomEvent("layOutDay", { detail: events });
    console.log('HERE I am')
    window.dispatchEvent(event);
  };
}

export function* rootSaga(): any {
  if (typeof window !== "undefined") {
    const layOutDayChannel = eventChannel((emitter) => {
      window.addEventListener("layOutDay", emitter);
      return () => window.removeEventListener("layOutDay", emitter);
    });

    yield takeEvery(layOutDayChannel, layOutDayWatcher);
  }
}

export default rootSaga;
