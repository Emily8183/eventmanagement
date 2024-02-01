import { Homepage } from './layouts/HomePage/Homepage'
import { Navbar } from './layouts/NavBarAndFooter/Navbar';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import './App.css';

export const App = () => {
  return (
    <div>
    <Navbar />
    <Homepage />
    <Footer />
    //must have the div tag for App.tsx
    </div>
  );
}
