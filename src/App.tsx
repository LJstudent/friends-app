import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Main from './components/ui/Main';
import Topbar from './components/ui/Topbar';
import { configure } from './state/store';
import { Theme } from '@mui/material/styles';

// fix bug in material ui v5 
declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme { }
}

class App extends React.PureComponent {
  public render() {
    return (
        <Provider store={configure()}>
          <React.Fragment>
            <CssBaseline />
            <Topbar />
            <Main />
          </React.Fragment>
        </Provider>
    );
  }
}

export default App;
