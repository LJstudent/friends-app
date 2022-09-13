import { AnyAction } from 'redux';
import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { AjaxResponse } from 'rxjs/ajax';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { IEvent } from '../../model/interfaces/IEvent';
import { createEvent, createEventFailed, createEventSuccess, loadEvents, loadEventsFailed, loadEventsSuccess } from '../actions/event.actions';
import { RootState } from '../reducers/root.reducers';
import { IClientDependency } from '../store';

export const createEvent$: Epic<AnyAction, AnyAction, RootState, IClientDependency> = (
  action$,
  state$,
  { client }
) =>
  action$.pipe(
    filter(isActionOf(createEvent)),
    mergeMap((action) => {
      const { event } = action.payload
      return client.createEvent(event).pipe(
        map((res: AjaxResponse) => createEventSuccess(res)))
    }),
    catchError((err) => {
      // return err
      return of(createEventFailed(err));
    })
  );

export const loadEvents$: Epic<AnyAction, AnyAction, RootState, IClientDependency> = (
  action$,
  state$,
  { client }
) =>
  action$.pipe(
    // We filter on
    filter(isActionOf(loadEvents)),
    mergeMap((action) => {
      return client.GetEvents().pipe(
        map((res: IEvent[]) => (loadEventsSuccess(res))));
    }),
    catchError((err) => {
      // return err
      return of(loadEventsFailed(err));
    })
  );

const eventEpics = [createEvent$, loadEvents$];

export default eventEpics;