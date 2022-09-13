import { combineEpics } from "redux-observable";
import eventEpics from "./event.epics";

export const rootEpics: any = combineEpics(
  ...eventEpics
);