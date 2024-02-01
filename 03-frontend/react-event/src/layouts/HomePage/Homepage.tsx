import { ExploreTopEvents } from '../../layouts/HomePage/components/ExploreTopEvents';
import { Carousel } from '../../layouts/HomePage/components/Carousel';
import { Heros } from '../../layouts/HomePage/components/Heros';
import { EventServices } from '../../layouts/HomePage/components/EventService';

export const Homepage = () => {
    return (
        <div>
            <ExploreTopEvents />
            <Carousel />
            <Heros />
            <EventServices />
        </div>
    )
}