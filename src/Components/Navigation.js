import React, {Component} from 'react';
import '../App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Main from "../Pages/Main";

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/price">Услуги</Link>
                    <Link to="/news">Новости</Link>
                    <Link to="/about">О нас</Link>
                </nav>
                <Switch>
                    <Route path="/" component={Main}></Route>
       {/*          <Route path="/price" component={}></Route>
                    <Route path="/news" component={}></Route>
                    <Route path="/about" component={}></Route>*/}
                </Switch>
            </Router>
        )
    }
}