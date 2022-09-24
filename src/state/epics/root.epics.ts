import { combineEpics } from "redux-observable";
import eventEpics from "./event.epics";
import genreEpics from "./genre.epics";

export const rootEpics: any = combineEpics(
  ...eventEpics,
  ...genreEpics
);