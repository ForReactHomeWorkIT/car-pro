import React from 'react';
import '../App.css';
import components from './components.module.css';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import Main from "../Pages/Main/Main";
import News from "../Pages/News/News"
import About from "../Pages/About/About";
import Price from "../Pages/Price/Price";
import {CSSTransition} from "react-transition-group";
import {Container, Nav, Navbar} from "react-bootstrap";
import Click from "./SoundEffect/Click";
import Hover from "./SoundEffect/Hover";

const routes = [
    {path: '/', name: 'Main', Component: Main, index: 1},
    {path: '/price', name: 'Price', Component: Price, index: 2},
    {path: '/news', name: 'News', Component: News, index: 3},
    {path: '/about', name: 'About', Component: About, index: 4}
]
const clickLink = () => {
    document.getElementById('click').play()
}
const hoverLink = () => {
    document.getElementById('hover').play()
}

export default function Navigation(props) {
    let hover = null
    let click = null
    if (!props.audio) {
        hover = <Hover />
        click = <Click />
    }
    return (
        <Router>
            <>
                {hover}
                {click}
                <Navbar bg="light">
                    <Nav className={components.wrap_nav} >
                        {routes.map((route) => (
                            <Nav.Link
                                onMouseEnter={
                                    !props.audio ? () => hoverLink() : () => false}
                                onClick={
                                    !props.audio ? () => clickLink() : ()=> false}
                                key={route.index}
                                as={NavLink}
                                to={route.path}
                                activeClassName="active"
                                className={components.wrap_nav__item}
                                exact
                            >{route.name}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar>
                <Container className="container">
                    {routes.map(({path, Component, index}) => (
                        <Route key={index} exact path={path}>
                            {({match}) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames="page"
                                    unmountOnExit
                                >
                                    <div id="main" className="page">
                                        <Component />
                                    </div>
                                </CSSTransition>
                            )}
                        </Route>
                    ))}
                </Container>
            </>
        </Router>
    )
}