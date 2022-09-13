import { AnyAction, combineReducers } from "redux";
import { IEventState } from "../containers/event.container";
import eventReducer from "./event.reducers";

export type RootState = {
  readonly events: IEventState;
}

export const rootReducers = combineReducers({
  events: eventReducer,
});

//tslint:disable-next-line:no-any
export const rootReducer = (state: any, action: AnyAction): any => {
  return rootReducers(state, action);
};