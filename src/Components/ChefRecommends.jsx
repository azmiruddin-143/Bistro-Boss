import React from 'react';
import TextTitle from '../Shared/TextTitle';
import img from '../../src/assets/slide1.jpg'
import img2 from '../../src/assets/slide4.jpg'
import img3 from '../../src/assets/slide3.jpg'

const ChefRecommends = () => {
    return (
        <div className='max-w-7xl mx-auto'>

            <TextTitle subHeading={'---Should Try---'} heading={'CHEF RECOMMENDS'} >

            </TextTitle>

            <div className='grid lg:grid-cols-3 gap-5 sm:gap-8 md:grid-cols-2 grid-cols-1 mx-10 lg:mx-10  justify-center my-14 lg:gap-16'>
                <div className="max-w-sm mx-auto bg-gray-50 shadow-md rounded-lg overflow-hidden">
                    <img className='w-full h-[250px] object-cover'
                        src={img}
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-800 text-center">Caeser Salad</h2>
                        <p className="mt-2 w-10/12 text-center mx-auto text-gray-600 text-sm">
                        Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus
                        </p>
                        <button className="mt-4  border-yellow-600 rounded-md border-b-2 bg-gray-200 pb-3  text-yellow-600  py-2 px-4 mx-auto flex hover:border-b-0 hover:bg-black  hover:text-yellow-600 duration-100 ">
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="max-w-sm mx-auto bg-gray-100 shadow-md rounded-lg overflow-hidden">
                    <img className='w-full h-[250px] object-cover'
                        src={img2}
                    />
                   <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-800 text-center">Escalope de Veau</h2>
                        <p className="mt-2 w-10/12 text-center mx-auto text-gray-600 text-sm">
                        Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette
                        </p>
                        <button className="mt-4  border-yellow-600 rounded-md border-b-2 bg-gray-200 pb-3  text-yellow-600  py-2 px-4 mx-auto flex hover:border-b-0 hover:bg-black  hover:text-yellow-600 duration-100 ">
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="max-w-sm mx-auto bg-gray-100 shadow-md rounded-lg overflow-hidden">
                    <img className='w-full h-[250px] object-cover'
                        src={img3}
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-800 text-center">Breton Fish Stew</h2>
                        <p className="mt-2 w-10/12 text-center mx-auto text-gray-600 text-sm">
                        Chargrilled chicken with avocado, baby gem lettuce, baby spinach, shallots, French beans, walnuts, croutons and a mustard dressing
                        </p>
                        <button className="mt-4  border-yellow-600 rounded-md border-b-2 bg-gray-200 pb-3  text-yellow-600  py-2 px-4 mx-auto flex hover:border-b-0 hover:bg-black  hover:text-yellow-600 duration-100 ">
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefRecommends;