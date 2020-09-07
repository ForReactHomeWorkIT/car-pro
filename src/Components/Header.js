import React, {Component} from 'react';
import '../App.css';
import components from './components.module.css';
import Logo from "./logo";

export default class Header extends Component {
    render() {
        return (
            <div id="header" className={components.header}>
                <Logo />
                <h1>Car-pro</h1>
            </div>
        )
    }
}