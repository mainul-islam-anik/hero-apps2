import React from 'react';
import {Bar, BarChart, XAxis, YAxis} from 'recharts';

const Chart = ({singleApp}) => {
    const data= singleApp.ratings
    return (
        <div className='mb-6'>
            <h2 className='font-semibold text-2xl mb-6'>Ratings</h2>
            <BarChart width="100%" height={300} data={data} >
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                <Bar dataKey="count" fill='#FF8811' barSize={30}></Bar>
            </BarChart>
            <hr className='my-6 text-gray-400' />
        </div>
        
    );
};

export default Chart;