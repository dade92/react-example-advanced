import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import styled from 'styled-components';
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Navbar from "./Navbar";
import Person from "./Person";
// react router
// pages
// navbar

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const ReactRouterSetup = () => {
    return <BrowserRouter>
        <Navbar/>
        <Title>this is a title</Title>
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
