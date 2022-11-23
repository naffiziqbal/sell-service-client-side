import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <div>
            <p>Category Wise Products Goes Down Here</p>
        </div>
    );
};

export default Products;
