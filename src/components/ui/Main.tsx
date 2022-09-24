import { Typography } from "@material-ui/core";
import * as React from 'react';
import ShowTodos from "../todo/ShowTodos";
import ShowGenres from "../genre/ShowGenres";
import StyledMain from "./styled/StyledMain";

class Main extends React.Component {
  render() {
    return (
      <StyledMain>
        <Typography paragraph>
          <ShowGenres />
          <ShowTodos />
        </Typography>
      </StyledMain>
    );
  }
};

export default Main;