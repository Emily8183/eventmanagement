import { useEffect, useState } from "react";
import EventModel from "../../models/EventModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { SearchEvent } from "./Components/SearchEvent";

export const searchEventsPage = () => {

    // this page is temporarily only listing all the events

    const [events, setEvents] = useState<EventModel[]>([]);
    // useState<EventModel[]>([]) initializes a state variable called events with an empty array as its initial value, and TypeScript ensures that the events array will contain EventModel objects.
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
 
    useEffect(() => {
        //fetch data from api
        const fetchEvents = async () => {
            const baseUrl: string = "http://localhost:8080/api/events";
            const url: string = `${baseUrl}?page=0&size=20`;
            // NOTE: must use back tick ` instead of ""
            const response= await fetch(url);

            //if else statement to see if needs to throw an error
            if(!response) {
                throw new Error('Somthing went wrong!');
            }

        //save data to responseData
        const responseJson = await response.json();
        const responseData = responseJson._embedded.events;

        // set up a new variable, then run a loop to push the data from the api(responseData) to the variable
        const loadedEvents: EventModel[] = [];

        for (const key in responseData) {
            loadedEvents.push(
                {
                    id: responseData[key].id,
                    title: responseData[key].title,
                    speaker: responseData[key].speaker,
                    description: responseData[key].description,
                    tickets: responseData[key].tickets,
                    ticketsAvailable: responseData[key].ticketsAvailable,
                    category: responseData[key].category,
                    img: responseData[key].img,
                });
        }

        // apply the useEffect to "setEvents"
        setEvents(loadedEvents);
        //after loading, change the loading status to false;
        setIsLoading(false);

    };

    fetchEvents().catch((error:any) => {
        setIsLoading(false);
        setHttpError(error.message);
    })    
        
    },[]);

    if (isLoading) {
        return (
            <SpinnerLoading />
        )
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }

 return (
    <div className='mt-3'>
        {events.map(event => (
            <SearchEvent key={event.id} event={event} /> 
        ))}
    </div>
 )


}