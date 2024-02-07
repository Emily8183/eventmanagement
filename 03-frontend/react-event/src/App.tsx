import React from 'react';
import { Homepage } from './layouts/HomePage/Homepage'
import { Navbar } from './layouts/NavBarAndFooter/Navbar';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import {Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { SearchEventsPage } from './layouts/SearchEventsPage/SearchEventsPage';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      {/* to keep the footer stay on bottom of each page */}
    <Navbar />
      <div className='flex-grow-1'>
        <Switch>
        {/* <Switch> wraps the <Route> components. */}

        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>

        <Route path='/home'>
          <Homepage />
        </Route>

        <Route path='/search'>
          <SearchEventsPage />
        </Route>

        </Switch>
      </div>
    <Footer />
    </div>
  );
}

// after updating the app function by using the arrow function, dont forget to update index.tsx
