import { Typography } from '@material-ui/core';
import * as React from 'react';
import { compose } from 'recompose';
import { IGenreActions, IGenreState, withGenres } from '../../state/containers/genre.container';
import StyledChip from '../ui/styled/StyledChip';


interface IProps extends IGenreState, IGenreActions { }

interface IState {
}

class ShowGenres extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.props.loadGenres()
    }

    public render() {
        const { genres } = this.props;

        if (genres.length === 0) {
            return null;
        }

        return (
            <div>
                <Typography className='tagItems' variant='body2'>
                    {genres
                        .map(genre => {
                            return (
                                <StyledChip colorBackground={genre.color} label={genre.genre} />
                            )
                        })}
                </Typography>
            </div>
        )
    };
};

export default compose<IProps, {}>(
    withGenres()
)(ShowGenres);