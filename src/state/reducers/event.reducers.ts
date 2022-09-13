import { ActionType } from "typesafe-actions";
import * as EventActions from "../actions/event.actions";
import { IEventState } from "../containers/event.container";

type Actions = ActionType<typeof EventActions>;

const initialState: IEventState = {
  events: []
};

const eventReducer = (state = initialState, action: Actions): IEventState => {
  switch (action.type) {
    case EventActions.LOAD_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload.events
      };
    case EventActions.CREATE_EVENT:
      return {
        ...state,
        events: [
          ...state.events,
          action.payload.event
        ]
      };
    default:
      return state;
  }
};

export default eventReducer;