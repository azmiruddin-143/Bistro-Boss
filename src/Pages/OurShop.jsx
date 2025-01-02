import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuBanner from '../Shared/MenuBanner';
import shopbanner from '../../src/assets/banner2.jpg'
import UseCategoryFilter from '../Shared/UseCategoryFilter';
import ShopCard from './ShopCard';
import { useParams } from 'react-router-dom';
const OurShop = () => {
    // const categories = ['salad','pizza','soup','dessert','deinks']
    // const initialIndex = categories.indexOf(category)
    // const [tabIndex,setTabIndex] = useState(initialIndex)
    // const {category} = useParams()
    const [menu] = UseCategoryFilter()
    const drinkCategory = menu.filter(item => item.category === "drink")
    const dessertCategory = menu.filter(item => item.category === "dessert")
    const pizzaCategory = menu.filter(item => item.category === "pizza")
    const saladCategory = menu.filter(item => item.category === "salad")
    const soupCategory = menu.filter(item => item.category === "soup")

    return (
        <div>
            <MenuBanner img={shopbanner} heading={'OUR SHOP'} descrption={'WOULD YOU LIKE TO TRY A DISH?'} ></MenuBanner>

            {/* tabls */}

            {/* defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}  */}
            <div className='max-w-7xl px-5 sm:px-5 mx-auto my-16 '>
                <Tabs >
                    <TabList className='text-center text-sm sm:text-lg uppercase'>
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid xl:grid-cols-4 my-14 gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                            {
                                saladCategory.map(salad =>
                                    <ShopCard item={salad} ></ShopCard>
                                )
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='grid xl:grid-cols-4 my-14 gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                            {
                                pizzaCategory.map(pizza =>
                                    <ShopCard item={pizza} ></ShopCard>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid xl:grid-cols-4 my-14 gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                            {
                                soupCategory.map(soup =>
                                    <ShopCard item={soup} ></ShopCard>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid xl:grid-cols-4 my-14 gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                            {
                                dessertCategory.map(dessert =>
                                    <ShopCard item={dessert} ></ShopCard>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {
                            drinkCategory.length === 0
                                ?
                                <h1 className='text-center text-4xl py-10'>No Data Found ?</h1>
                                :
                                <div className='grid xl:grid-cols-4 my-14 gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                                    {
                                        drinkCategory.map(drink =>
                                            <ShopCard item={drink} ></ShopCard>
                                        )
                                    }
                                </div>
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;