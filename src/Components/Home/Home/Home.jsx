import React from 'react';
import Categories from '../Category/Categories';
import Banner from './Section/Banner';
import Reviews from './Section/Review/Reviews';


const Home = () => {
    return (
        <div className='text-white'>
          <Banner/>
          <Categories/>
          <Reviews/>
        </div>
    );
};

export default Home;
