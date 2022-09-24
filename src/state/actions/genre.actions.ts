import { createAction } from "typesafe-actions";
import { IGenre } from "../../model/interfaces/IGenre";

export const LOAD_GENRES = '[GENRE] load';
export const LOAD_GENRES_SUCCESS = '[GENRE] load success';
export const LOAD_GENRES_FAILED = '[GENRE] load failed'

export const loadGenres = createAction(LOAD_GENRES);

export const loadGenresSuccess = createAction(LOAD_GENRES_SUCCESS, action =>
    (genres: IGenre[]) => action({ genres })
);

export const loadGenresFailed = createAction(LOAD_GENRES_FAILED, action =>
    (error?: string) =>
        action({ error })
);