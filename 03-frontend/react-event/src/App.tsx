import React from 'react';
import { Homepage } from './layouts/HomePage/Homepage'
import { Navbar } from './layouts/NavBarAndFooter/Navbar';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import {Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

export const App = () => {
  return (
    <div>
    <Navbar />
      <div>
        <Switch>
        {/* <Switch> wraps the <Route> components. */}

        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>

        <Route path='/home'>
          <Homepage />
        </Route>

        </Switch>
      </div>
    <Footer />
    </div>
  );
}

// after updating the app function by using the arrow function, dont forget to update index.tsx
