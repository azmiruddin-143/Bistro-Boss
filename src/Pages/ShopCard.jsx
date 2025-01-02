import React from 'react';

const ShopCard = ({ item }) => {
    const { name, _id, image, price, category, recipe } = item
    return (
        <div className="max-w-sm mx-auto relative bg-gray-50 shadow-md rounded-lg overflow-hidden">
            <img className='w-full h-[250px] object-cover'
                src={image}
            />
            <div className='absolute top-2 py-1 px-2 text-white bg-black right-3'>
                <h1>{price}</h1>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 text-center">{name}</h2>
                <p className="mt-2 w-10/12 text-center mx-auto text-gray-600 text-sm">
                    {recipe}
                </p>
                <button className="mt-4  border-yellow-600 rounded-md border-b-2 bg-gray-200 pb-3  text-yellow-600  py-2 px-4 mx-auto flex hover:border-b-0 hover:bg-black  hover:text-yellow-600 duration-100 ">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default ShopCard;