import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavBarAndFooter/Navbar';
import { ExploreTopEvents } from './layouts/HomePage/ExploreTopEvents';
import { Carousel } from './layouts/HomePage/Carousel';
import { Heros } from './layouts/HomePage/Heros';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopEvents />    
      <Carousel />
      <Heros />

    </div>
    //must have the div tag for App.tsx
  );
}

export default App;
