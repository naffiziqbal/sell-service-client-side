import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Header from '../Components/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
           <div className="container mx-auto">
           <Outlet />
           </div>
            <Footer/>
        </div>
    );
};

export default Main;
