import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Quotes from "./containers/Quotes/Quotes";
import AddQuote from "./containers/AddQoute/AddQuote";
import Navigation from "./components/Navigation/Navigation";
import Edit from "./components/Edit/Edit";


const App = () => (
    <BrowserRouter>
        <Navigation/>
        <Switch>
            <Route path='/' exact component={Quotes}/>
            <Route path='/quotes/:category' exact component={Quotes}/>
            <Route path='/add-quote' component={AddQuote}/>
            <Route path='/quotes/:id/edit' component={Edit}/>
        </Switch>
    </BrowserRouter>

);

export default App;
