'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function PhotoSlider() {
    return (
        <section>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop>
                <SwiperSlide>
                    <div className='relative w-full h-[85vh]'>
                        <Image 
                            src="/images/proje1/örnek1.jpg"
                            alt="logo"
                            fill
                            className='object-cover'
                        />
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className='relative w-full h-[85vh]'>
                        <Image 
                            src="/images/proje4/örnek1.jpg"
                            alt="logo"
                            fill
                            className='object-cover'
                        />
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-[85vh]'>
                        <Image 
                            src="/images/proje1/örnek1.jpg"
                            alt="logo"
                            fill
                            className='object-cover'
                        />
                   </div>
                </SwiperSlide>
            </Swiper>
        </section>
    ) 
}