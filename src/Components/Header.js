import React, {Component} from 'react';
import '../App.css';
import components from './components.module.css';
import Logo from "./logo";

const Header = props => {
        return (
            <div id="header" className={components.header}>
                <div className={components.header__logo}>
                    <Logo />
                    <h1>Car-pro</h1>
                </div>
            </div>
        )
}

export default Header;