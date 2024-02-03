import EventModel from "../../../models/EventModel";
import { ReturnEvent } from "./ReturnEvent";
import { useEffect, useState } from "react";




export const Carousel = () => {

    const [events, setEvents] = useState<EventModel[]>([]);

    useEffect(() => {
        //fetch data from api
        const fetchEvents = async () => {
            const baseUrl: string = "http://localhost:8080/api/books";
            const url: string = "${baseUrl}?page=0&size=9";
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

        //apply the useEffect to "setEvents"
        setEvents(loadedEvents);


        }

       

        
    })

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
                         <ReturnEvent />   
                         <ReturnEvent />
                         <ReturnEvent />
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                        <ReturnEvent />
                        <ReturnEvent />
                        <ReturnEvent />
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                        <ReturnEvent />
                        <ReturnEvent />
                        <ReturnEvent />
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
                    {/* <ReturnBook book={books[7]} key={books[7].id}/> */}
                    <ReturnEvent />
                </div>
            </div>
            <div className='homepage-carousel-title mt-3'>
                <a className='btn btn-outline-secondary btn-lg' href='#'>View More</a>
                {/* The href='#' means that when the "View More" link is clicked, it will not navigate to a different page or URL. Instead, it will stay on the same page or reload the current page. */}
            </div>
        </div>
    );

}