import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import withTheme, { WithTheme } from '@mui/styles/withTheme';
import { compose } from 'recompose';

const StyledMain = styled(Grid)(({ theme }: WithTheme) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(8),

  '.todoItem': {
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(2)
  },

  '.todoItem:active': {
    boxShadow: '0 3px 5px rgb(0 0 0 / 0.2)',
    transform: 'translateY(2px)'
  },

  '.todoText': {
    maxWidth: theme.spacing(20)
  },

  '.input': {
    paddingTop: theme.spacing(3),
  },

  '.tagItems': {
    marginTop: theme.spacing(2)
  },

  '.createGrid': {
    marginTop: theme.spacing(2)
  },

  '.timePicker': {
    marginLeft: theme.spacing(1)
  },

  '.select': {
    marginTop: theme.spacing(2),
    minWidth: 150,
  },

  '.multilineTextField': {
    minWidth: 450
  },

  '.autoGrid': {
    marginTop: theme.spacing(2)
  }
}));

export default compose<WithTheme, {}>(
  withTheme
)(StyledMain as typeof Grid);
