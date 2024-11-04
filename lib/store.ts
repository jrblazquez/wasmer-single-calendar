import createSagaMiddleware from "@redux-saga/core";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./features/calendar/calendarSlice";
import rootSaga from "./rootSaga";

const rootReducer = combineSlices(calendarSlice);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  console.info("make store");
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
      }).concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore["dispatch"];
