import { Autocomplete, Box, Button, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { DesktopDatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from 'react';
import { compose } from 'recompose';
import { IEvent } from '../../model/interfaces/IEvent';
import { IEventActions, IEventState, withLists } from '../../state/containers/event.container';
import { IGenreActions, IGenreState, withGenres } from '../../state/containers/genre.container';
import * as yup from 'yup';
import { Formik } from "formik";


interface IProps extends IEventState, IEventActions, IGenreState, IGenreActions { }

interface IState {
    date: Date;
    time: Date;
    level: string;
    city: string;
}

interface IOuterProps {
    setCreateTodo(handleCreatetodo: boolean): void;
}

interface IInnerProps extends IOuterProps, IProps { }

interface IFormInputs {
    todoTitle: string;
}

class CreateEvent extends React.Component<IInnerProps, IState> {
    state = {
        date: new Date(),
        time: new Date('2020-01-01 12:00'),
        level: "",
        city: ""
    };

    public render() {
        const { genres } = this.props;

        const validationSchema = yup.object({
            todoTitle: yup
                .string().required('Todo title is required'),
        });

        const formikProps = {
            initialValues: {
                todoTitle: '',
            },
            validationSchema: validationSchema,
            onSubmit: (values: IFormInputs) => {
                alert(JSON.stringify(values, null, 2));
            },
        };

        return (
            <Formik {...formikProps}>
                {({
                    values,
                    handleBlur,
                    handleChange,
                    isSubmitting,
                    errors,
                    handleSubmit
                }) => (
                    <Box component="form" noValidate onSubmit={handleSubmit}>
                        <div>
                            <FormControl required variant="standard">
                                <InputLabel error={Boolean(errors.todoTitle)}>Todo title</InputLabel>
                                <Input onChange={handleChange} value={values.todoTitle} />
                                {Boolean(errors.todoTitle) ? <FormHelperText error>{errors.todoTitle}</FormHelperText> : null}
                            </FormControl>
                        </div>
                        <div className='autoGrid'>
                            <Autocomplete
                                id="combo-box-demo"
                                options={genres}
                                getOptionLabel={(genre) => genre.genre}
                                renderInput={(params) => <TextField required {...params} style={{ width: 300 }} label="Activity" variant="outlined" />}
                            />
                        </div>
                        <div className='createGrid'>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    inputFormat="dd/MM/yyyy"
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
                                    value={this.state.time}
                                    onChange={this.handleChangeTime}
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
                            <Input onChange={this.handleChangeTodoCity} value={this.state.city} />
                            <FormHelperText id="my-helper-text"> You will share the exact location later</FormHelperText>
                        </FormControl>
                        <div className='input'>
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                                size="small"
                            >Add todo
                            </Button>
                        </div>
                    </Box>
                )}
            </Formik>
        )
    };

    handleChangeLevel = (e: SelectChangeEvent) => {
        this.setState({
            level: e.target.value as string
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

    handleChangeTime = (time: Date | null) => {
        if (time !== null) {
            this.setState({
                time: time
            });
        }
    };

    handleSubmit = () => {
        // const event: IEvent = {
        //     id: 0,
        //     activity: this.state.activity,
        //     date: this.state.date
        // };
        // this.props.createEvent(event);

        // this.props.setCreateTodo(false);
    };
};

export default compose<IInnerProps, IOuterProps>
    (withLists(), withGenres())
    (CreateEvent);