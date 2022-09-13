import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import * as React from 'react';
import { compose } from 'recompose';
import { IEvent } from '../../model/interfaces/IEvent';
import { IEventActions, IEventState, withLists } from '../../state/containers/event.container';


interface IProps extends IEventState, IEventActions { }

interface IState {
    activity: string;
    date: Date;
}

interface IOuterProps {
    setCreateTodo(handleCreatetodo: boolean): void;
}

interface IInnerProps extends IOuterProps, IProps { }

class CreateEvent extends React.Component<IInnerProps, IState> {
    state = {
        activity: "",
        date: new Date()
    };

    public render() {

        return (
            <div>
                <div>
                    <FormControl required variant="standard">
                        <InputLabel >Todo title</InputLabel>
                        <Input onChange={this.handleChangeTodoTitle} value={this.state.activity}/>
                    </FormControl>
                </div>
                <div className='input'>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        size="small"
                        onClick={this.handleSubmit.bind(this)}
                    >Add todo
                    </Button>
                </div>
            </div>
        )
    };

    handleChangeTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            activity: e.target.value
        });
    };

    handleSubmit = () => {
            const event: IEvent = {
                id: 0,
                activity: this.state.activity,
                date: this.state.date
            };
            this.props.createEvent(event);

            this.props.setCreateTodo(false);
        };
    };

export default compose<IInnerProps, IOuterProps>
    (withLists())
    (CreateEvent);