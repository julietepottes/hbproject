import React from 'react';
import './Home.css'
import '../components/Menu.css';
import Dash from '../components/Dash';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Panel from '../components/Panel';


class Home extends React.Component {
    render() {
        return (
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
        );
    }
}

export default Home;