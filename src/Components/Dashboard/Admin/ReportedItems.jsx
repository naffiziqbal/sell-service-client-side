import React from 'react';
import img from './under.svg'
const ReportedItems = () => {
    
    return (
        <div className='flex flex-col justify-center items-center my-20'>
            <p className='text-3xl font-semibold text-center text-blue-500'>Under Contraction Process</p>
            <img className='max-w-md' src={img} alt="" />
        </div>
    );
};

export default ReportedItems;
