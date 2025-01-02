import React, { useEffect, useState } from 'react';
import TextTitle from '../Shared/TextTitle';
import UseCategoryFilter from '../Shared/UseCategoryFilter';

const Menu = () => {
    const [menu] = UseCategoryFilter()

    const popularCategory = menu.filter(item => item.category === "popular")


    // const [menu, setMenu] = useState([])
    // console.log(menu);
    // useEffect(() => {
    //     fetch('/menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popoularItem = data.filter(item => item.category === "popular")
    //             setMenu(popoularItem)
    //         })
    // }, [])
    return (
        <div>
               
               <TextTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'} >
                 
                 </TextTitle>

            <div className="max-w-7xl px-12 xl:px-0 mx-auto p-4">
            <div className="grid md:grid-cols-2 gap-6">
                {popularCategory.map(menu =>
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
            <div className="text-center mt-8">
                <button className="px-6 py-2 border-b-2 border-black  text-black rounded  transition">
                    View Full Menu
                </button>
            </div>
        </div>
        </div>
    );
};

export default Menu;