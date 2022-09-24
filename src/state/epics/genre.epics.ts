import { AnyAction } from 'redux';
import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { IGenre } from '../../model/interfaces/IGenre';
import { loadGenres, loadGenresSuccess, loadGenresFailed } from '../actions/genre.actions';
import { RootState } from '../reducers/root.reducers';
import { IClientDependency } from '../store';

export const loadGenres$: Epic<AnyAction, AnyAction, RootState, IClientDependency> = (
  action$,
  state$,
  { client }
) =>
  action$.pipe(
    // We filter on
    filter(isActionOf(loadGenres)),
    mergeMap((action) => {
      return client.GetGenres().pipe(
        map((res: IGenre[]) => (loadGenresSuccess(res))));
    }),
    catchError((err) => {
      // return err
      return of(loadGenresFailed(err));
    })
  );

const genreEpics = [loadGenres$];

export default genreEpics;