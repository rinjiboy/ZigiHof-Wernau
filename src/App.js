import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

import React from 'react';
import Routing from './routes';
import MainView from './components/main-view/main-view';

const theme = createTheme({
	palette: {
		primary: {
			light: '#ffffff',
			main: '#eceff1',
			dark: '#babdbe',
			contrastText: '#000',
		},
		secondary: {
			light: '#b2fab4',
			main: '#81c784',
			dark: '#519657',
			contrastText: '#fff',
		},
	}
});

function App() {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <MainView/>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
