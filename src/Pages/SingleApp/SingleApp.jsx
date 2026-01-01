import { Star } from 'lucide-react';
import { Download } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const SingleApp = ({appData}) => {
    // console.log(appData)

    const {image, id, title,downloads,ratingAvg}= appData;

    return (
       <Link to={`/appDetails/${id}`}>
        <div className="card bg-base-100 w-[290px] h-[390px] shadow-sm">
  <figure className='p-5'>
    <img className='h-[250px] w-[250px] bg-gray-100 p-6 rounded-2xl'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
    </h2>
    <div className="card-actions justify-between">
        
      <div className="badge bg-[#F1F5E8] font-semibold text-[#00D390]"><Download className='h-[15px] w-[15px]'></Download>{downloads}</div>
      <div className="badge bg-[#FFF0E1] font-semibold text-[#FF8811]"><Star className='h-[15px] w-[15px]'></Star>{ratingAvg}</div>
    </div>
  </div>
        </div></Link>
    );
};

export default SingleApp;