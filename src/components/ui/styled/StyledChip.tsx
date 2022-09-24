import withTheme, { WithTheme } from '@material-ui/core/styles/withTheme';
import styled from 'react-emotion';
import { compose } from 'recompose';
import Chip, { ChipProps } from '@material-ui/core/Chip';

interface StyledChipProps {
    colorBackground: string;
  }

interface OuterProps extends StyledChipProps, ChipProps { }

interface IInnerProps extends StyledChipProps, WithTheme { }


const StyledChip = styled(Chip)(({ theme, colorBackground }: IInnerProps) => ({
    backgroundColor: colorBackground,
    color: 'white',
    marginLeft: theme.spacing(1)
}));

export default compose<IInnerProps, OuterProps>(
  withTheme
)(StyledChip);
