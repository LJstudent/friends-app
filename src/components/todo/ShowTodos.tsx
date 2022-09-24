import { Checkbox, Divider, IconButton, List, ListItem, ListItemText, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import * as React from 'react';
import { compose } from 'recompose';
import { IEventActions, IEventState, withLists } from '../../state/containers/event.container';
import CreateTodo from './CreateTodo';
import ShowCardTodo from './ShowCardTodo';


interface IProps extends IEventState, IEventActions { }

interface IState {
    todoId: number;
    createTodo: boolean;
}

class ShowTodos extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.props.loadEvents()
    }

    state = {
        todoId: 0,
        createTodo: false,
    };

    public render() {
        const { events } = this.props;

        return (
            <div>
                <List>
                    {events
                        .map(event => {
                            return (
                                <ListItem className='todoItem' key={event.id} button role={undefined} onClick={this.handleClick.bind(this, event.id)}>
                                    <Checkbox
                                        edge="start"
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                    <ListItemText className='todoText' primary={event.activity} />
                                </ListItem>
                            )
                        })}
                </List>
                <Divider />
                <IconButton onClick={this.handleCreateTodo}>
                    {!this.state.createTodo ?
                        <Tooltip title="Add">
                            <AddIcon />
                        </Tooltip> :
                        <Tooltip title="Cancel">
                            <CloseIcon />
                        </Tooltip>
                    }
                </IconButton>
                <IconButton>
                    <Tooltip title='Edit'>
                        <EditIcon />
                    </Tooltip>
                </IconButton>
                <IconButton>
                    <Tooltip title='Delete'>
                        <DeleteIcon />
                    </Tooltip>
                </IconButton>
                {this.state.createTodo ? <CreateTodo setCreateTodo={this.handleCreateTodo} /> : null}
                {this.state.todoId ? <ShowCardTodo todoId={this.state.todoId} /> : null}
            </div>
        )
    };

    handleCreateTodo = () => {
        this.setState({
            createTodo: !this.state.createTodo,
            todoId: 0
        });
    };

    handleClick = (TodoId: number, event: React.MouseEvent<HTMLElement>) => {
        this.setState({
            todoId: TodoId
        });
    };
};

export default compose<IProps, {}>(
    withLists()
)(ShowTodos);