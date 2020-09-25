import React from 'react';
import '../App.css';
import components from './components.module.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import Main from "../Pages/Main/Main";
import News from "../Pages/News/News"
import About from "../Pages/About/About";
import Price from "../Pages/Price/Price";
import {CSSTransition} from "react-transition-group";
import {Container, Nav, Navbar} from "react-bootstrap";

const routes = [
    {path: '/', name: 'Main', Component: Main},
    {path: '/price', name: 'Price', Component: Price},
    {path: '/news', name: 'News', Component: News},
    {path: '/about', name: 'About', Component: About}
]

export default function Navigation() {
    return (
        <Router>
            <>
                <Navbar bg="light">
                    <Nav className={components.wrap_nav} >
                        {routes.map(route => (
                            <Nav.Link
                                key={route.path}
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
                    {routes.map(({path, Component}) => (
                        <Route exact path={path}>
                            {({match}) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={1000}
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