import React from 'react';
import featured from '../../src/assets/featured.jpg'
import TextTitle from '../Shared/TextTitle';

const FeaturedMenu = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${featured})`, backgroundColor: "#00000087",
                backgroundBlendMode: "multiply"
            }} className="bg-cover py-10 max-w-7xl mx-auto bg-no-repeat bg-center w-full h-full">

            <div className='py-10 text-center w-10/12  sm:w-7/12 lg:w-4/12 mx-auto'>
                <p className='text-[#D99904] border-b pb-3'>---Check it out---</p>
                <h1 className='sm:text-4xl text-3xl font-bold text-white border-b pb-3'>FROM OUR MENU</h1>
            </div>


            <div className='sm:flex justify-center py-8 mx-auto items-center gap-8'>
                <div className=''>
                    <img className='w-[400px]' src={featured} alt="" />
                </div>
                <div className='sm:w-5/12'>
                    <h3 className='text-white'>March 20, 2023</h3>
                    <h2 className='text-white'>WHERE CAN I GET SOME?</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                    <button className="px-6 mt-3 uppercase py-2 border-b-2 border-white  text-white rounded  transition">
                        Read more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedMenu;