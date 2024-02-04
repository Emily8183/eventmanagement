import {useState, useEffect} from 'react';
import EventModel from '../../../models/EventModel';
// this is for dynamic page

export const ReturnEvent: React.FC<{book:EventModel}> = (props) => {
    return (
    <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
        <div className='text-center'>
            {/* if else statement to display either the image called from the API or a default image */}
            {props.book.img ? 
                <img
                src = {props.book.img}
                width='151'
                height='233'
                alt="event"
            /> : 
            <img
                src={require('../../.././Images/EventsImages/event1.jpg')}
                width='151'
                height='233'
                alt="event"
            />
            }
            <h6 className='mt-2'>Event</h6>
            <p>Events</p>
            <a className='btn main-color text-white' href='8'>Reserve</a>
        </div>
    </div>
    )
}