import { ExploreTopEvents } from '../../layouts/HomePage/components/ExploreTopEvents';
import { Carousel } from '../../layouts/HomePage/components/Carousel';
import { Heros } from '../../layouts/HomePage/components/Heros';
import { EventServices } from '../../layouts/HomePage/components/EventService';

export const Homepage = () => {
    return (
        <>
            <ExploreTopEvents />
            <Carousel />
            <Heros />
            <EventServices />
        </>
        // using <> to show we want to return these elements but we don't want it to be a div or a span
    )
}