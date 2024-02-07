import { Link } from "react-router-dom";

export const ExploreTopEvents = () => {
    return (
        <div className='p-5 mb-4 bg-dark header'>
           {/* m - for classes that set margin, p - for classes that set padding  */}
            <div className='container-fluid py-5 text-white 
                d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className='display-5 fw-bold'>Find your next event</h1>
                    <p className='col-md-8 fs-4'>What interests you the most?</p>
                    <Link type='button' className='btn main-color btn-lg text-white' to='/search'>
                        Explore top events</Link>
                </div>
            </div>
        </div>
    );
}
