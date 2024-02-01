import React from 'react'
// this is for dynamic page

export const ReturnEvent = () => {
    return (
    <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
        <div className='text-center'>
            <img src={require('./../../Images/EventsImages/event1.jpg')}
                width='151'
                height='233'
                alt="event"
            />
            <h6 className='mt-2'>Event</h6>
            <p>Events</p>
            <a className='btn main-color text-white' href='8'>Reserve</a>
        </div>
    </div>
    )
}