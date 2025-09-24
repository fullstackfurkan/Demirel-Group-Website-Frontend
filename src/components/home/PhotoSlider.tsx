'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { Project } from '@/types';

export default function PhotoSlider() {

    const [projectData, setProjectData] = useState<Project[]>([]);

    useEffect(() => {
        fetch('https://localhost:7048/Projects')
        .then(res => res.json())
        .then(data => 
            {setProjectData(data)
                console.log(data);
            })
    }, [])

    return (
        <section>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop>
                    {projectData.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className='relative w-full h-[85vh]'>
                                <Image 
                                    src={project.photos[0].photoUrl}
                                    alt="logo"
                                    fill
                                    className='object-cover'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                {/* <SwiperSlide>
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
                </SwiperSlide> */}
            </Swiper>
        </section>
    ) 
}