import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
           <div className="container mx-auto">
           <Outlet />
            <Footer/>
           </div>
        </div>
    );
};

export default Main;
