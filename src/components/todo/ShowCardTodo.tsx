import { Card, CardContent, Chip, Divider, Typography } from '@material-ui/core';
import * as React from 'react';
import { compose } from 'recompose';
import { IEventActions, IEventState, withLists } from '../../state/containers/event.container';

interface IProps extends IEventState, IEventActions { }

interface IOuterProps {
    todoId: number;
}

interface IInnerProps extends IProps, IOuterProps { }

interface IState { }

class ShowCardTodo extends React.Component<IInnerProps, IState> {

    public render() {
        const { events } = this.props;

        return (
            <div>
                {events
                    .filter(event => event.id === this.props.todoId)
                    .map(event => {
                        return (
                            <Card raised>
                                <CardContent>
                                    <Typography variant='h5' component='div'>
                                        {event.activity}
                                    </Typography>
                                    <Typography gutterBottom>
                                        {event.date}
                                    </Typography>
                                    <Divider />
                                    <Typography className='tagItems' variant='body2'>
                                        <Chip variant='outlined' className='chipLabel' label='tag' />
                                        <Chip variant='outlined' className='chipLabel' label='tag' />
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })}
            </div>
        )
    };
}

export default compose<IInnerProps, IOuterProps>(
    withLists()
)(ShowCardTodo);