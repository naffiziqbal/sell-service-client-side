import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData()
    console.log(products);
    
    
    return (
        <div>
            <p>Category Wise Products Goes Down Here</p>

            <div className="grid grid-cols-1 gap-5">
                {
                    products.map(product =>
                         <Product
                          key={product._id}
                          product = {product}
                        
                        />)
                }
            </div>
        </div>
    );
};

export default Products;
