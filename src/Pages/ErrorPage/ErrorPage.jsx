import React from 'react';
import errorImage from '../../assets/error-404.png'
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const goBack = useNavigate()
    const handleBack =()=>{
        goBack(-1)
    }
    return (
        <div className='p-10 flex items-center justify-center text-center'>
            <div>
            <img className='mb-10' src={errorImage} alt="" />
            <h1 className='font-semibold text-5xl mb-4'>Oops, page not found!</h1>
            <p className='text-[#627382] mb-4'>The page you are looking for is not available.</p>
            <button onClick={handleBack} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Go Back</button>
        </div>
        </div>
    );
};

export default ErrorPage;