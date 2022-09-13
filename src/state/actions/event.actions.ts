import { AjaxResponse } from "rxjs/ajax";
import { createAction } from "typesafe-actions";
import { IEvent } from "../../model/interfaces/IEvent";

export const CREATE_EVENT = '[EVENT] create';
export const CREATE_EVENT_SUCCESS = '[EVENT] create success';
export const CREATE_EVENT_FAILED = '[EVENT] create failed';
export const LOAD_EVENTS = '[EVENT] load';
export const LOAD_EVENTS_SUCCESS = '[EVENT] load success';
export const LOAD_EVENTS_FAILED = '[EVENT] load failed'

export const createEvent = createAction(CREATE_EVENT, action =>
  (event: IEvent) => action({ event })
);

export const createEventSuccess = createAction(CREATE_EVENT_SUCCESS, action =>
  (res: AjaxResponse) => action({ res }));

export const createEventFailed = createAction(CREATE_EVENT_FAILED, action =>
  (error?: string) =>
    action({ error })
);

export const loadEvents = createAction(LOAD_EVENTS);

export const loadEventsSuccess = createAction(LOAD_EVENTS_SUCCESS, action =>
  (events: IEvent[]) => action({ events })
);

export const loadEventsFailed = createAction(LOAD_EVENTS_FAILED, action =>
  (error?: string) =>
    action({ error })
);