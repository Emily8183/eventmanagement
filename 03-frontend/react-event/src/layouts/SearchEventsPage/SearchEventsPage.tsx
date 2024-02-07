import { useState } from "react";
import EventModel from "../../models/EventModel";

export const searchEventsPage = () => {

    // this page is temporarily only listing all the events

    const [events, setEvents] = useState<EventModel[]>([]);
    // useState<EventModel[]>([]) initializes a state variable called events with an empty array as its initial value, and TypeScript ensures that the events array will contain EventModel objects.
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
 



}