import React from 'react';
import Categories from '../Category/Categories';
import Banner from './Section/Banner';


const Home = () => {
    return (
        <div className='text-white'>
          <Banner/>
          <Categories/>
        </div>
    );
};

export default Home;
