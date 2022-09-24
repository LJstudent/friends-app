import { ActionType } from "typesafe-actions";
import * as GenreActions from "../actions/genre.actions";
import { IGenreState } from "../containers/genre.container";

type Actions = ActionType<typeof GenreActions>;

const initialState: IGenreState = {
    genres: []
};

const genreReducer = (state = initialState, action: Actions): IGenreState => {
    switch (action.type) {
        case GenreActions.LOAD_GENRES_SUCCESS:
            return {
                ...state,
                genres: action.payload.genres
            };
        default:
            return state;
    }
};

export default genreReducer;