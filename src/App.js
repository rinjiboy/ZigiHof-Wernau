import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from 'react-redux';

import "./App.css";
import MainView from "./components/MainView/MainView";
import store from "./ReduxStore/ReduxStore"

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
          <MainView />
        </MuiThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;