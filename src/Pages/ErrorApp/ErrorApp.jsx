import React from 'react';
import errorApp from '../../assets/App-Error.png'
import { useNavigate } from 'react-router';
const ErrorApp = () => {
    const goBack = useNavigate()
    const handleBack =()=>{
        goBack(-1)
    }
    return (
        <div className='p-10 flex items-center justify-center text-center'>
                    <div>
                    <img className='h-[300px] w-[300px] max-w-[1200px] mx-auto mb-10' src={errorApp} alt="" />
                    <h1 className='font-semibold text-5xl mb-4'>OPPS!! APP NOT FOUND</h1>
                    <p className='text-[#627382] mb-4'>The App you are requesting is not found on our system.  please try another apps</p>
                    <button onClick={handleBack} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Go Back</button>
                </div>
                </div>
    );
};

export default ErrorApp;