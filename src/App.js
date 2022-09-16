import './App.scss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from "./ReduxStore/ReduxStore"

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainView from './routes/MainView/MainView';
import HelperLogin from './routes/HelperLogin/HelperLogin';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#eceff1",
      dark: "#babdbe",
      contrastText: "#000",
    },
    secondary: {
      light: "#b2fab4",
      main: "#81c784",
      dark: "#519657",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
			<Routes>
				<Route path="/" element={<NavBar/>} >	
					<Route index element={<MainView />} />
					<Route path='admin' element={<HelperLogin />} />
				</Route>	
			</Routes>
        </MuiThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;