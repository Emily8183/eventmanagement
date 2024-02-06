import EventModel from "../../../models/EventModel";
import { ReturnEvent } from "./ReturnEvent";
import { useEffect, useState } from "react";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { Link } from "react-router-dom";

export const Carousel = () => {

    const [events, setEvents] = useState<EventModel[]>([]);
    const [isLoading,setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        //fetch data from api
        const fetchEvents = async () => {
            const baseUrl: string = "http://localhost:8080/api/events";
            const url: string = `${baseUrl}?page=0&size=9`;
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
        <div className='container mt-5' style={{ height: 550 }}>

            <div className='homepage-carousel-title'>
                <h3>Find your next fav event.</h3>
            </div>
            <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 
            d-none d-lg-block' data-bs-interval='false'>

                {/* Desktop */}
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                         {/* loop through the ReturnEvent  */}
                          {events.slice(0,3).map(event => (
                            <ReturnEvent event={event} key = {event.id} />
                            // passed event object as a prop
                          ))}
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                        {events.slice(3,6).map(event => (
                            <ReturnEvent event={event} key = {event.id} />
                        ))} 
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                        {events.slice(6,9).map(event => (
                            <ReturnEvent event={event} key = {event.id} />
                        ))} 
                        </div>
                    </div>
                </div>

                <button className='carousel-control-prev' type='button'
                    data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>

                <button className='carousel-control-next' type='button'
                    data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>

            {/* Mobile */}
            <div className='d-lg-none mt-3'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <ReturnEvent event={events[7]} key={events[7].id}/>
                </div>
            </div>

            <div className='homepage-carousel-title mt-3'>
                <Link className='btn btn-outline-secondary btn-lg' to='/search'>View More</Link>
                {/* The href='#' means that when the "View More" link is clicked, it will not navigate to a different page or URL. Instead, it will stay on the same page or reload the current page. */}
            </div>
        </div>
    );

}