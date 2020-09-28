import React from 'react';
import '../App.css';
import components from './components.module.css';
import Logo from "./Logo/logo";

const Header = props => {
        return (
            <div id="header" className={components.header}>
                <div className={components.header__logo}>
                    <Logo />
                    <h2>Car-pro</h2>
                </div>
            </div>
        )
}

export default Header;