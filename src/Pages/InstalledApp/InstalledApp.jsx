import React from 'react';
import { Download, LucideBedSingle, Star, ThumbsUp } from 'lucide-react';


const InstalledApp = ({app}) => {
    const {image, title,downloads,ratingAvg,size}= app;
    
    return (
        <div className='flex justify-between items-center p-4 rounded-xl bg-white mt-4'>
            <div className='flex gap-10 items-center'>
                <img className='h-[80px] w-[80px]' src={image} alt="" />
                <div>
                <h1 className='font-medium text-xl mb-2'>{title}</h1>
                <div className='flex justify-between gap-8'>
                    <div className='flex text-[#00D390] gap-1'>
                        <Download></Download>
                        <h1 className='font-medium'>{downloads}</h1>
                    </div>
                    <div className='flex text-[#FF8811] gap-1'>
                        <Star></Star>
                        <h1 className='font-medium'>{ratingAvg}</h1>
                    </div>
                    <div>
                        <p className='font-medium text-[#627382]'>{size} MB</p>
                    </div>
                </div>
            </div>
            </div>
            <button className='btn bg-[#00D390] text-white'>Uninstall</button>
        </div>
    );
};

export default InstalledApp;