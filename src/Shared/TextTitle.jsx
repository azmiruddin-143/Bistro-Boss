import React from 'react';

const TextTitle = ({heading, subHeading}) => {
    return (
        <div className='sm:py-10 text-center sm:w-4/12 mx-auto'>
            <p className='text-[#D99904] border-b pb-3'>{subHeading}</p>
            <h1 className='lg:text-4xl text-3xl  font-bold text-black border-b pb-3'>{heading}</h1>
        </div>
    );
};

export default TextTitle;