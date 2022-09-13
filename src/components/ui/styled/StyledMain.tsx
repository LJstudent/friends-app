import withTheme, { WithTheme } from '@material-ui/core/styles/withTheme';
import styled from 'react-emotion';
import { compose } from 'recompose';



const StyledMain = styled('main')(({ theme }: WithTheme) => ({
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

  '.checkBoxDate': {
    display: 'flex'
  },

  '.priority': {
    width: theme.spacing(15)
  },

  '.tagItems': {
    marginTop: theme.spacing(2)
  },
  
  '.chipLabel': {
    marginLeft: theme.spacing(2),
    width: theme.spacing(10)
  }
}));



export default compose<WithTheme, {}>(
  withTheme
)(StyledMain);
