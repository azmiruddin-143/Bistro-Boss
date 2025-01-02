import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../src/assets/01.jpg'
import banner2 from '../../src/assets/02.jpg'
import banner3 from '../../src/assets/03.png'
import banner4 from '../../src/assets/04.jpg'
import banner5 from '../../src/assets/05.png'
import banner6 from '../../src/assets/06.png'

const Banner = () => {
    return (
        <Carousel autoPlay infiniteLoop interval={3000}  >
        <div>
            <img  src={banner1} />
        </div>
        <div>
            <img src={banner2} />
        </div>
        <div>
            <img src={banner3}/>
        </div>
        <div>
            <img src={banner4}/>
        </div>
        <div>
            <img src={banner5}/>
        </div>
        <div>
            <img src={banner6}/>
        </div>
    </Carousel>
    );
};

export default Banner;