import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../Utility/addToDB';
import Apps from '../Apps/Apps';
import SingleApp from '../SingleApp/SingleApp';
import InstalledApp from '../InstalledApp/InstalledApp';

const Installation = () => {
    const [installedApp, setInstalledApp] =useState([])
    const data = useLoaderData()

    useEffect(() => {
        const storedAppData = getStoredApp();
        const ConvertedStoredApps = storedAppData.map(id => parseInt(id))
        const myInstalledApps = data.filter(apps => ConvertedStoredApps.includes(apps.id));
        // console.log(myInstalledApps)
        // setInstalled(myInstalledApps)
        setInstalledApp(myInstalledApps)
        // console.log(installedApp)
    },[])
    return (
        <div className='bg-[#D2D2D2]'>
            <h1 className='font-bold text-5xl text-center pt-20'>Your Installed Apps</h1>
            <p className='text-[#627382] text-center mt-4'>Explore All Trending Apps on the Market developed by us</p>
            <div className='max-w-[1200px] mx-auto mt-20 pb-20'>
                <h1 className='font-semibold text-xl'>{installedApp.length} Apps Found</h1>
            {
               installedApp.map(app => <InstalledApp key={app.id} app={app} ></InstalledApp>) 
            }
            </div>
        </div>
    );
};

export default Installation;