import React, {Component} from 'react';
import '../App.css';
import components from './components.module.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Main from "../Pages/Main/Main";

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div id="main">
                    <nav className={components.wrap_nav}>
                        <Link className={components.wrap_nav__item} to="/">Главная</Link>
                        <Link className={components.wrap_nav__item} to="/price">Услуги</Link>
                        <Link className={components.wrap_nav__item} to="/news">Новости</Link>
                        <Link className={components.wrap_nav__item} to="/about">О нас</Link>
                    </nav>
                    <Switch>
                        <Route path="/" component={Main}/>
                        {/*          <Route path="/price" component={} />
                    <Route path="/news" component={} />
                    <Route path="/about" component={} />*/}
                    </Switch>
                </div>
            </Router>
        )
    }
}