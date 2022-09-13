import withTheme, { WithTheme } from '@material-ui/core/styles/withTheme';
import Toolbar, { ToolbarProps } from '@material-ui/core/Toolbar';
import styled from 'react-emotion';
import { compose } from 'recompose';


const StyledToolbar = styled(Toolbar)(({ theme }: WithTheme) => ({
}));

export default compose<WithTheme, ToolbarProps>(
  withTheme
)(StyledToolbar);
