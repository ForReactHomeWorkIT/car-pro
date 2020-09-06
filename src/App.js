import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";


export default class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Navigation />
          <Footer />
        </div>
    )
  }
}
