'use client'

import Image from 'next/image'
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { Project } from '@/types';

export default function PhotoSlider() {

    const [projectData, setProjectData] = useState<Project[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/Projects`)
            .then(res => res.json())
            .then(data => {
                setProjectData(data)
                console.log(data);
            })
    }, [])

    if (!projectData) return <div className="text-center py-20">Yükleniyor...</div>;

    return (
        <section>
            <Swiper
                key={projectData.length}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop>
                {projectData.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className='relative w-full h-[85vh]'>
                            <Link href={"/projeler"}>
                                <Image
                                    src={project.photos[0].photoUrl}
                                    alt='logo'
                                    fill
                                    className='object-cover'
                                />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}