import * as React from 'react';
import { connect } from 'react-redux';
import { IGenre } from '../../model/interfaces/IGenre';
import { loadGenres } from '../actions/genre.actions';
import { RootState } from '../reducers/root.reducers';

export interface IGenreState {
  genres: IGenre[];
}

export interface IGenreActions {
  loadGenres(): void;
}

const mapStateToProps = (state: RootState) => ({
  genres: state.genres.genres
});

const mapDispatchToProps: IGenreActions = {
  loadGenres,
};

export const withGenres = () => (Component: React.ComponentType) => {
  class GenreContainer extends React.PureComponent {
    public render() {
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(GenreContainer);
};

