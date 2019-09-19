import React from 'react';
// import Home from './pages/Home';
import "@hbsis.uikit/react/dist/uikit.css";
import { ThemeProvider, DefaultTheme, GlobalStyle } from "@hbsis.uikit/react";
import AppStyled from "./AppStyled";
import Dash from './components/Dash';
import Nav from './components/Nav';
import Header from './components/Header';
import Menu from './components/Menu';
import Panel from './components/Panel';


const App = () => (
  <ThemeProvider theme={DefaultTheme}>
    <AppStyled>
      <GlobalStyle />
      < div className="home">
        <div className="dash"><Dash /></div>
        <div className="panel">
          <div className="nav-header">
            <div><Nav /></div>
            <div><Header /></div>
          </div>
          <div className="menu-panel">
            <div><Menu /></div>
            <div className="small-panel"><Panel /></div>
          </div>
        </div>
      </div>
    </AppStyled>
  </ThemeProvider>
);

export default App;
