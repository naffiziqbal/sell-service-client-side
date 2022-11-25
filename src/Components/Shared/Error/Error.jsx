import React from 'react';
import errImg from './404.png'

const Error = () => {
    return (
        <div className='container mx-auto'>
          <img src={errImg} alt=""  className=' object-contain'/>
        </div>
    );
};

export default Error;
