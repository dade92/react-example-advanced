import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Navbar from "./Navbar";
import Person from "./Person";
// react router
// pages
// navbar

const ReactRouterSetup = () => {
    return <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path={"/"}>
                <Home/>
            </Route>
            <Route path={"/about"}>
                <About/>
            </Route>
            <Route path={"/people"}>
                <People/>
            </Route>
            <Route path={'/person/:id'} children={<Person/>}/>
            <Route path={"*"}>
                <Error/>
            </Route>
        </Switch>
    </BrowserRouter>;
};

export default ReactRouterSetup;
