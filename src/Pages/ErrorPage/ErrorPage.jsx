import React from 'react';
import errorImage from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center text-center'>
            <div>
            <img className='mb-10' src={errorImage} alt="" />
            <h1 className='font-semibold text-5xl mb-4'>Oops, page not found!</h1>
            <p className='text-[#627382] mb-4'>The page you are looking for is not available.</p>
            <button onClick={(-1)} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Go Back</button>
        </div>
        </div>
    );
};

export default ErrorPage;