export const Carousel = () => {
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
                            <img src={require('./../../Images/EventsImages/event1.jpg')}
                                width='151'
                                height='233'
                                alt="event"
                            />
                            <h6 className='mt-2'>Some kind of Event</h6>
                            <p>Events</p>
                            <a className='btn main-color text-white' href='8'>Reserve</a>
                        </div>
                    </div>

                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <img src={require('./../../Images/EventsImages/event2.jpg')}
                                width='151'
                                height='233'
                                alt="event"
                            />
                            <h6 className='mt-2'>Some kind of Event</h6>
                            <p>Events</p>
                            <a className='btn main-color text-white' href='8'>Reserve</a>
                        </div>
                    </div>

                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <img src={require('./../../Images/EventsImages/event3.jpg')}
                                width='151'
                                height='233'
                                alt="event"
                            />
                            <h6 className='mt-2'>Some kind of Event</h6>
                            <p>Events</p>
                            <a className='btn main-color text-white' href='8'>Reserve</a>
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
                    <div className="text-center">
                        <img src={require('./../../Images/EventsImages/event1.jpg')}
                            width='151'
                            height='233'
                            alt="event"
                        />
                        <h6 className='mt-2'></h6>
                        <b>Event</b>
                        <a className='btn main-color text-white' href='8'>Reserve</a>
                    </div>
                </div>
            </div>
            <div className='homepage-carousel-title mt-3'>
                <a className='btn btn-outline-secondary btn-lg' href='#'>View More</a>
                {/* The href='#' means that when the "View More" link is clicked, it will not navigate to a different page or URL. Instead, it will stay on the same page or reload the current page. */}
            </div>
        </div>
    );

}