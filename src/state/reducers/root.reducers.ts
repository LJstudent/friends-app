import { AnyAction, combineReducers } from "redux";
import { IEventState } from "../containers/event.container";
import { IGenreState } from "../containers/genre.container";
import eventReducer from "./event.reducers";
import genreReducer from "./genre.reducer";

export type RootState = {
  readonly events: IEventState;
  readonly genres: IGenreState;
}

export const rootReducers = combineReducers({
  events: eventReducer,
  genres: genreReducer
});

//tslint:disable-next-line:no-any
export const rootReducer = (state: any, action: AnyAction): any => {
  return rootReducers(state, action);
};