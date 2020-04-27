import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from "../../Pages/Home/Home";
import Movies from "../../Pages/Movies/Movies";

const SwicthComponent = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route exact path="/Home">
                <Home></Home>
            </Route>
            <Route path="/Movies">
                <Movies></Movies>
            </Route>
        </Switch>
    )
}

export default SwicthComponent;
