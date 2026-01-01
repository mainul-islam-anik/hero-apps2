import React from 'react';

const Description = ({singleApp}) => {
    return (
        <div>
            <h1 className='font-semibold text-2xl mb-6'>Description</h1>
            <p className='pb-16'>{singleApp.description}</p>
        </div>
    );
};

export default Description;