import React, { Fragment } from 'react';
// import Home from './pages/Home';
import "@hbsis.uikit/react/dist/uikit.css";
import { ThemeProvider, DefaultTheme, GlobalStyle } from "@hbsis.uikit/react";
import './App.css';
import Dash from './components/Dash';
import Nav from './components/Nav';
import Header from './components/Header';
import Menu from './components/Menu';
import Panel from './components/Panel';

const App = () => (
  <ThemeProvider theme={DefaultTheme}>
    <Fragment>
      <GlobalStyle />
      < div className="home" >
        <div className="dash"><Dash /></div>
        <div className="nav-header">
          <div><Nav /></div>
          <div><Header /></div>
        </div>
        <div className="menu-panel">
          <div><Menu /></div>
          <div><Panel /></div>
        </div>
      </div>
    </Fragment>
  </ThemeProvider>
);

export default App;
