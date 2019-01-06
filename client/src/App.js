import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './css/App.css';

import HeaderBar from "./components/header/HeaderBar";
import NavSubBar from "./components/navsubbar/NavSubBar";
import Footer from './components/Footer';
import Home from "./components/home/Home";
import Members from "./components/members/Members";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header>
                        <HeaderBar/>
                    </header>
                    <main>
                        {/* <div className="container">
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/members" component={Members}/>
                        </div> */}
                    <div className="container">
                        <NavSubBar/>
                    </div>
                    </main>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;
