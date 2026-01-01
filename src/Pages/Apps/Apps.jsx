import React, { Suspense} from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { Link } from 'react-router';

const Apps = ({data}) => {
    // console.log(data)

    return (
        <div className='bg-[#D2D2D2]'>
            <h1 className='font-bold text-5xl text-center pt-20'>Trending Apps</h1>
            <p className='text-[#627382] text-center mt-4'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<span>Loading....</span>}>
                <div className='pl-15 md:pl-15 lg:pl-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto gap-4 py-10'>
                    {
                    data?.map(appData =><SingleApp key={appData.id} appData={appData}></SingleApp>)
                }
                </div>
            </Suspense>
           <Link to='/allapps'>
                 <div className='text-center pb-20'>
                <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</button>
            </div>
           </Link>
        </div>
    );
};

export default Apps;