import React from 'react';
import { Navbar } from '../../layouts/NavBarAndFooter/Navbar';
import { Footer } from '../../layouts/NavBarAndFooter/Footer';
import { ExploreTopEvents } from '../../layouts/HomePage/components/ExploreTopEvents';
import { Carousel } from '../../layouts/HomePage/components/Carousel';
import { Heros } from '../../layouts/HomePage/components/Heros';
import { EventServices } from '../../layouts/HomePage/components/EventService';



export const Homepage = () => {
    return (
        <div>
            <Navbar />
            <ExploreTopEvents />
            <Carousel />
            <Heros />
            <EventServices />
            <Footer />
        </div>
    )
}