import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import Simpson from './Simpson';
import './Rout.css';

class Rout extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavLink exact to="/"  activeClassName="selected"> Accueil </NavLink>
                    <NavLink to="/notre-histoire" activeClassName="selected"> Histoire </NavLink>
                    <NavLink to="/simpson"  activeClassName="selected"> Simpson </NavLink>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/notre-histoire" component={History} />
                        <Route path="/simpson" component={Simpson} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Rout;