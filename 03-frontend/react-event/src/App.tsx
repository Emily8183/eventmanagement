import React from 'react';
import './App.css';
import {Navbar} from './layouts/NavBarAndFooter/Navbar';
import { ExploreTopEvents } from './layouts/HomePage/ExploreTopEvents';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopEvents />    
    </div>
    //must have the div tag for App.tsx
  );
}

export default App;
