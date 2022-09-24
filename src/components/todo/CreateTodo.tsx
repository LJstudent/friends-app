import { Autocomplete, Button, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { DesktopDatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from 'react';
import { compose } from 'recompose';
import { IEvent } from '../../model/interfaces/IEvent';
import { IEventActions, IEventState, withLists } from '../../state/containers/event.container';
import { IGenreActions, IGenreState, withGenres } from '../../state/containers/genre.container';


interface IProps extends IEventState, IEventActions, IGenreState, IGenreActions { }

interface IState {
    activity: string;
    date: Date;
    level: string;
    city: string;
}

interface IOuterProps {
    setCreateTodo(handleCreatetodo: boolean): void;
}

interface IInnerProps extends IOuterProps, IProps { }

class CreateEvent extends React.Component<IInnerProps, IState> {
    state = {
        activity: "",
        date: new Date(),
        level: "",
        city: ""
    };

    public render() {
        const { genres } = this.props;

        return (
            <div>
                <div>
                    <FormControl required variant="standard">
                        <InputLabel>Todo title</InputLabel>
                        <Input onChange={this.handleChangeTodoTitle} value={this.state.activity} />
                    </FormControl>
                </div>
                <div className='autoGrid'>
                    <Autocomplete
                        id="combo-box-demo"
                        options={genres}
                        getOptionLabel={(genre) => genre.genre}
                        renderInput={(params) => <TextField required {...params} style={{ width: 300 }} label="Combo box" variant="outlined" />}
                    />
                </div>
                <div className='createGrid'>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            disablePast={true}
                            label="Date desktop"
                            value={this.state.date}
                            onChange={this.handleChangeDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <TimePicker
                            ampm={false}
                            minutesStep={15}
                            className='timePicker'
                            label="Time"
                            value={this.state.date}
                            onChange={this.handleChangeDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                </div>
                <FormControl className='select'>
                    <InputLabel required id="demo-simple-select-label">Expercience</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.level}
                        label="Expercience"
                        onChange={this.handleChangeLevel}
                    >
                        <MenuItem value={10}>Beginner</MenuItem>
                        <MenuItem value={20}>Intermediate</MenuItem>
                        <MenuItem value={30}>Expert</MenuItem>
                    </Select>
                </FormControl>
                <div className='createGrid'>
                    <TextField
                        id="standard-multiline-static"
                        label="Add more info about your expercience"
                        multiline
                        rows={4}
                        placeholder='Share your stats for example 120 kg bench press so your potential trainingbuddy know what he has to beat'
                        className='multilineTextField'
                    />
                </div>
                <FormControl className='createGrid' required variant="standard">
                    <InputLabel>City</InputLabel>
                    <Input onChange={this.handleChangeTodoCity} value={this.state.activity} />
                    <FormHelperText id="my-helper-text"> You will share the exact location later</FormHelperText>
                </FormControl>
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

    handleChangeLevel = (e: SelectChangeEvent) => {
        this.setState({
            level: e.target.value as string
        });
    };

    handleChangeTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            activity: e.target.value
        });
    };

    handleChangeTodoCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            city: e.target.value
        });
    };

    handleChangeDate = (date: Date | null) => {
        if (date !== null) {
            this.setState({
                date: date
            });
        }
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
    (withLists(), withGenres())
    (CreateEvent);