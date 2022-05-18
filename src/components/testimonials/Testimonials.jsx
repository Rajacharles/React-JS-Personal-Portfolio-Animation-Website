import React from 'react'
import './testimonials.css'
import avt1 from '../../assets/avatar1.jpg'
import avt2 from '../../assets/avatar2.jpg'
import avt3 from '../../assets/avatar3.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
  avatar: avt1,
  name: 'Alice',
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum maiores, error provident, iusto cupiditate consequatur ipsa debitis laborum neque sit quam nam unde expedita vitae corporis voluptatum porro. Ullam, aliquam!'
 },
 {
  avatar: avt2,
  name: 'Viwin',
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum maiores, error provident, iusto cupiditate consequatur ipsa debitis laborum neque sit quam nam unde expedita vitae corporis voluptatum porro. Ullam, aliquam!'
 },
 {
  avatar: avt3,
  name: 'Stephine',
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum maiores, error provident, iusto cupiditate consequatur ipsa debitis laborum neque sit quam nam unde expedita vitae corporis voluptatum porro. Ullam, aliquam!'
 },      
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Happy Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Testimonial Slider" />
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials