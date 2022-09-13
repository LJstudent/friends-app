import withTheme, { WithTheme } from '@material-ui/core/styles/withTheme';
import styled from 'react-emotion';
import { compose } from 'recompose';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';


const StyledAppbar = styled(AppBar)(({ theme }: WithTheme) => ({
}));

export default compose<WithTheme, AppBarProps>(
  withTheme
)(StyledAppbar);
