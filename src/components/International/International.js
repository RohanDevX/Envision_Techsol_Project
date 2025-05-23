import React from 'react';
import './International.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import videoBg2 from '../assets/International.mp4';

import europeImg from '../assets/europe.jpg';
import vietnamImg from '../assets/vietnam.jpg';
import baliImg from '../assets/bali.jpg';
import thailandImg from '../assets/thailand.jpg';
import kazakhstanImg from '../assets/kazakhstan.jpg';
import malaysiaImg from '../assets/malaysia.jpg';
import japanImg from '../assets/japan.jpg';

const countries = [
  { name: 'Europe', img: europeImg },
  { name: 'Vietnam', img: vietnamImg },
  { name: 'Bali', img: baliImg },
  { name: 'Thailand', img: thailandImg },
  { name: 'Kazakhstan', img: kazakhstanImg },
  { name: 'Malaysia', img: malaysiaImg },
  { name: 'Japan', img: japanImg },
];

const International = () => {
  return (
    <div className="international-section">
      <div className="video-container">
        <video src={videoBg2} autoPlay loop muted />
        <div className="video-overlay">
          <h1>International Trips</h1>
          <p>Your next adventure is just one click away</p>
          <button className="explore-btn">Explore</button>
        </div>
      </div>

      <div className="slider-section">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {countries.map((country, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <img src={country.img} alt={country.name} />
                <div className="card-overlay">
                  <p>{country.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default International;
