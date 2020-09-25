import React, {Component} from 'react';
import '../App.css';
import components from './components.module.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Main from "../Pages/Main/Main";
import News from "../Pages/News/News"
import About from "../Pages/About/About";
import Price from "../Pages/Price/Price";

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
                        <Route exact path="/" component={Main}/>
                        <Route path="/news" component={News} />
                        <Route path="/price" component={Price} />
                    <Route path="/about" component={About} />
                    </Switch>
                </div>
            </Router>
        )
    }
}