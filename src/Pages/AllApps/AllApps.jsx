import React, { Suspense, useState } from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { useLoaderData } from 'react-router';

const AllApps = () => {
    const data = useLoaderData()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term? data.filter(app => app.title.toLocaleLowerCase().includes(term)): data 
    console.log(searchedApps)
    return (
        <div className='bg-[#D2D2D2]'>
            
            <h1 className='font-bold text-5xl text-center pt-20'>Our All Applications</h1>
            <p className='text-[#627382] text-center mt-4 pb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='max-w-[1200px] mx-auto pb-5 md:flex justify-between items-center'>
                <h1 className='font-semibold text-2xl' >({searchedApps.length}) Apps Found</h1>
                <label className="input">
                     <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search apps..." />
                </label>
            </div>
               <Suspense fallback={<span>Loading....</span>}>
                 <div className='pl-15 md:pl-15 lg:pl-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto gap-4 pb-10'>
                    {
                    searchedApps.map(appData =><SingleApp key={appData.id} appData={appData}></SingleApp>)
                }
                </div>
               </Suspense>
        </div>
    );
};

export default AllApps;