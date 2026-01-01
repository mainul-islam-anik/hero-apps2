import React from 'react';
import Navber from '../../Components/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import './root.css'
const Root = () => {
    return (
        <div className=''>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;