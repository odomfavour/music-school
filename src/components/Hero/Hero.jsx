import React from 'react'
// Import Swiper React components
import { Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; // core Swiper
// import 'swiper/modules/autoplay/autoplay.min.css'; // core Swiper
import './hero.css';

const Hero = () => {
    return (
        <section id="hero-section">
            <div className="main-slider">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    spaceBetween={0}
                    speed={2000}
                    navigation
                    loop={true}
                    effect={"fade"}
                    autoplay
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        427: {
                            slidesPerView: 1,
                        },
                        // when window width is <= 999px
                        768: {
                            slidesPerView: 2,
                        },
                        999: {
                            slidesPerView: 1,
                        },

                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="hero-bg hero-bg-one">
                           <div className='slider-content'>
                               <h1>Music for Everyone</h1>
                               <p>Awaken Posibilities</p>
                               <button className='btn btn-primary'>Start Learning</button>
                           </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-bg hero-bg-two">
                        <div className='slider-content'>
                               <h1>Start With a new Note</h1>
                               <p>Awaken Posibilities</p>
                               <button className='btn btn-primary'>Start Learning</button>
                           </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-bg hero-bg-three">
                        <div className='slider-content'>
                               <h1>Start With a new Note</h1>
                               <p>Awaken Posibilities</p>
                               <button className='btn btn-primary'>Start Learning</button>
                           </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    )
}

export default Hero