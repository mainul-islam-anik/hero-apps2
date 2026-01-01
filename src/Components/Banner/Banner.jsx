import React from 'react';
import heroimage from '../../assets/hero.png'
import googlePlay from '../../assets/fi_16076057.png'
import appStore from '../../assets/fi_5977575.png'


const Banner = () => {
    return (
        <>
        <div className='text-center bg-[#D2D2D2]'>
            <div className='px-20 pt-20 pb-10'>
                <h1 className='text-6xl font-bold'>We Build <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'> Productive</span> Apps</h1>
            <p className='mt-4 text-[#627382]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='pb-10'>
                <a href="https://play.google.com/store/games?hl=en"><button className='btn bg-white font-bold p-6 mr-4'> <img src={googlePlay} alt="" />Google Play</button></a>
                <a href="https://www.apple.com/app-store/"><button className='btn bg-white font-bold p-6'> <img src={appStore} alt="" />App Store</button></a>
            </div>
            <img className='w-[650px] mx-auto' src={heroimage} alt="" />
        </div>
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
            <h1 className='text-center pt-20 text-white font-bold text-5xl'>Trusted by Millions, Built for You</h1>
            <div className='md:flex md:justify-between md:px-60 pb-20 pt-10 items-center text-center text-white'>
                <div>
                <p>Total Downloads</p>
                <h1 className='font-extrabold text-6xl my-4'>29.6M</h1>
                <p>21% more than last month</p>
            </div>
            <div>
                <p>Total Downloads</p>
                <h1 className='font-extrabold text-6xl my-4'>29.6M</h1>
                <p>21% more than last month</p>
            </div>
            <div>
                <p>Total Downloads</p>
                <h1 className='font-extrabold text-6xl my-4'>29.6M</h1>
                <p>21% more than last month</p>
            </div>
            </div>
        </div>
        </>
    );
};

export default Banner;