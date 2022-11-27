import React from 'react';

const BlogContent = ({blog}) => {
    const {headline, textBody, img} = blog
    return (
        <div className='mb-5'>
            <h3 className='text-xl font-semibold border p-2 text-center my-1'>{headline}</h3>
            <img src={img} alt="" />
            <p>{textBody}</p>

        </div>
    );
};

export default BlogContent;
