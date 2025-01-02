import React from 'react';
import MenuBanner from '../Shared/MenuBanner';
import UseCategoryFilter from '../Shared/UseCategoryFilter';
import TextTitle from '../Shared/TextTitle';
import ourMenu from '../../src/assets/banner3.jpg'
import dessert from '../../src/assets/dessert-bg.jpeg'
import pizza from '../../src/assets/pizza-bg.jpg'
import soup from '../../src/assets/soup-bg.jpg'
import salad from '../../src/assets/salad-bg.jpg'
import { Link } from 'react-router-dom';
const OurMenu = () => {

    const [menu] = UseCategoryFilter()

    const offeredCategory = menu.filter(item => item.category === "offered")
    const dessertCategory = menu.filter(item => item.category === "dessert")
    const pizzaCategory = menu.filter(item => item.category === "pizza")
    const saladCategory = menu.filter(item => item.category === "salad")
    const soupCategory = menu.filter(item => item.category === "soup")
    return (
        <div>
            <MenuBanner heading={'OUR MENU'} img={ourMenu} descrption={'WOULD YOU LIKE TO TRY A DISH?'} ></MenuBanner>

            <TextTitle subHeading={`---Don't miss---`} heading={`TODAY'S OFFER`} >

            </TextTitle>

            <div className="max-w-7xl mx-auto p-4">
                <div className="grid md:grid-cols-2 gap-6">
                    {offeredCategory.map(menu =>
                        <div
                            className="flex justify-between items-start border-b border-gray-300 pb-4"
                        >
                            <div className="flex items-start space-x-4">
                                <img className='w-12 h-12 rounded-full' src={menu.image} alt="" />
                                <div>
                                    <h3 className="text-lg font-semibold">{menu.name}</h3>
                                    <p className="text-gray-500 text-sm">{menu.recipe}</p>
                                </div>
                            </div>
                            <p className="text-yellow-500 font-bold">{menu.price}</p>
                        </div>
                    )}
                </div>
                {/* <Link to={`/ourmenu/${heading}`}>
                    <button className="px-6 py-2 mx-auto flex border-b-2 text-center mt-8 border-black  text-black rounded  transition">
                        ORDER YOUR FAVOURITE FOOD
                    </button>
                </Link> */}
            </div>

            <MenuBanner heading={'desserts'} img={dessert} descrption={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></MenuBanner>

            {/* daset */}

            <div className="max-w-7xl mx-auto p-4">
                <div className="grid md:grid-cols-2 gap-6">
                    {dessertCategory.map(menu =>
                        <div
                            className="flex justify-between items-start border-b border-gray-300 pb-4"
                        >
                            <div className="flex items-start space-x-4">
                                <img className='w-12 h-12 rounded-full' src={menu.image} alt="" />
                                <div>
                                    <h3 className="text-lg font-semibold">{menu.name}</h3>
                                    <p className="text-gray-500 text-sm">{menu.recipe}</p>
                                </div>
                            </div>
                            <p className="text-yellow-500 font-bold">{menu.price}</p>
                        </div>
                    )}
                </div>

                {/* <Link to={`/ourshop/${heading}`}>
                    <button className="px-6 py-2 mx-auto flex border-b-2 text-center mt-8 border-black  text-black rounded  transition">
                        ORDER YOUR FAVOURITE FOOD
                    </button>
                </Link> */}

            </div>

            {/* pizza */}

            <MenuBanner heading={'pizza'} img={pizza} descrption={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></MenuBanner>

            <div className="max-w-7xl mx-auto p-4">
                <div className="grid md:grid-cols-2 gap-6">
                    {pizzaCategory.map(menu =>
                        <div
                            className="flex justify-between items-start border-b border-gray-300 pb-4"
                        >
                            <div className="flex items-start space-x-4">
                                <img className='w-12 h-12 rounded-full' src={menu.image} alt="" />
                                <div>
                                    <h3 className="text-lg font-semibold">{menu.name}</h3>
                                    <p className="text-gray-500 text-sm">{menu.recipe}</p>
                                </div>
                            </div>
                            <p className="text-yellow-500 font-bold">{menu.price}</p>
                        </div>
                    )}
                </div>
                {/* <Link to={'/ourshop'}>
                    <button className="px-6 py-2 mx-auto flex border-b-2 text-center mt-8 border-black  text-black rounded  transition">
                        ORDER YOUR FAVOURITE FOOD
                    </button>
                </Link> */}
            </div>

            {/* salat */}


            <MenuBanner heading={'salad'} img={salad} descrption={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></MenuBanner>

            <div className="max-w-7xl mx-auto p-4">
                <div className="grid md:grid-cols-2 gap-6">
                    {saladCategory.map(menu =>
                        <div
                            className="flex justify-between items-start border-b border-gray-300 pb-4"
                        >
                            <div className="flex items-start space-x-4">
                                <img className='w-12 h-12 rounded-full' src={menu.image} alt="" />
                                <div>
                                    <h3 className="text-lg font-semibold">{menu.name}</h3>
                                    <p className="text-gray-500 text-sm">{menu.recipe}</p>
                                </div>
                            </div>
                            <p className="text-yellow-500 font-bold">{menu.price}</p>
                        </div>
                    )}
                </div>
                {/* <Link to={'/ourshop'}>
                    <button className="px-6 py-2 mx-auto flex border-b-2 text-center mt-8 border-black  text-black rounded  transition">
                        ORDER YOUR FAVOURITE FOOD
                    </button>
                </Link> */}
            </div>

            {/* soups */}


            <MenuBanner heading={'Soups'} img={soup} descrption={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></MenuBanner>

            <div className="max-w-7xl mx-auto p-4">
                <div className="grid md:grid-cols-2 gap-6">
                    {soupCategory.map(menu =>
                        <div
                            className="flex justify-between items-start border-b border-gray-300 pb-4"
                        >
                            <div className="flex items-start space-x-4">
                                <img className='w-12 h-12 rounded-full' src={menu.image} alt="" />
                                <div>
                                    <h3 className="text-lg font-semibold">{menu.name}</h3>
                                    <p className="text-gray-500 text-sm">{menu.recipe}</p>
                                </div>
                            </div>
                            <p className="text-yellow-500 font-bold">{menu.price}</p>
                        </div>
                    )}
                </div>
                {/* <Link to={'/ourshop'}>
                    <button className="px-6 py-2 mx-auto flex border-b-2 text-center mt-8 border-black  text-black rounded  transition">
                        ORDER YOUR FAVOURITE FOOD
                    </button>
                </Link> */}
            </div>

        </div>
    );
};

export default OurMenu;