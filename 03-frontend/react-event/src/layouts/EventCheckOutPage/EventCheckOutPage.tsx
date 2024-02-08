import { useEffect, useState } from "react";
import EventModel from "../../models/EventModel";

export const EventCheckoutPage = () => {
const [event, setEvent] = useState<EventModel>();
const [isLoading,setIsLoading] = useState(true);
const [httpError, setHttpError] = useState(null);

const eventId = (window.location.pathname).split('/')[2];

useEffect(() => {
    //fetch data from api
    const fetchEvent = async () => {
        const baseUrl: string = 'http://localhost:8080/api/events/${eventId}';
        // NOTE: must use back tick ` instead of ""
        const response= await fetch(baseUrl);

        //if else statement to see if needs to throw an error
        if(!response) {
            throw new Error('Somthing went wrong!');
        }

    //save data to responseData
    const responseJson = await response.json();

    // set up a new variable, then run a loop to push the data from the api(responseData) to the variable
    const loadedEvent: EventModel = {
                id: responseJson.id,
                title: responseJson.title,
                speaker: responseJson.speaker,
                description: responseJson.description,
                tickets: responseJson.tickets,
                ticketsAvailable: responseJson.ticketsAvailable,
                category: responseJson.category,
                img: responseJson.img,
            };

        setEvent(loadedEvent);
        setIsLoading(false);

        fetchEvent().catch((error:any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
        }
    });


}