import React from 'react';
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'


const Testimonials = () => {

const data =[
    {
        avatar:AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellat, ut. Ad aperiam dolorum, ' +
            'illo iusto voluptas voluptatibus. Ad asperiores deleniti dolore dolorem dolorum error, est magnam ' +
            'nesciunt officia porro repellendus, sapiente sunt!'
    },
    {
        avatar:AVTR2,
        name: 'Shata Wale',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellat, ut. Ad aperiam dolorum, ' +
            'illo iusto voluptas voluptatibus. Ad asperiores deleniti dolore dolorem dolorum error, est magnam ' +
            'nesciunt officia porro repellendus, sapiente sunt!'
    },
    {
        avatar:AVTR3,
        name: 'Kwame Despite',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellat, ut. Ad aperiam dolorum, ' +
            'illo iusto voluptas voluptatibus. Ad asperiores deleniti dolore dolorem dolorum error, est magnam ' +
            'nesciunt officia porro repellendus, sapiente sunt!'
    },
    {
        avatar:AVTR4,
        name: 'Nana Ama McBrown',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellat, ut. Ad aperiam dolorum, ' +
            'illo iusto voluptas voluptatibus. Ad asperiores deleniti dolore dolorem dolorum error, est magnam ' +
            'nesciunt officia porro repellendus, sapiente sunt!'
    }

]

    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"

                // install Swiper modules
                modules={[ Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}>

                {
                    data.map(({avatar, name, review},index)=>{
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client_avatar">
                                    <img src={avatar} alt={name} className='avtr'/>
                                </div>
                                <h5 className='client_name'>{name}</h5>
                                <small className='client_review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;