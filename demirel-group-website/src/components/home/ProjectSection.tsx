'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";

export default function ProjectSection() {

    const allProjects = [
        { 
            projectName: "Sanayi Dış",
            photoLink: "/images/proje4/örnek1.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora architecto accusantium, nihil sunt laborum ab animi exercitationem ea voluptates delectus repudiandae ipsum placeat voluptatibus, laudantium, recusandae maxime sed provident ex totam pariatur libero natus! Fugit esse itaque omnis explicabo?",
            location: "İstanbul Sanayi",
            href: "/projects/proje1"
         },
         { 
            projectName: "Sanayi Dış1",
            photoLink: "/images/proje4/örnek1.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora architecto accusantium, nihil sunt laborum ab animi exercitationem ea voluptates delectus repudiandae ipsum placeat voluptatibus, laudantium, recusandae maxime sed provident ex totam pariatur libero natus! Fugit esse itaque omnis explicabo?",
            location: "İstanbul Sanayi",
            href: "/projects/proje1"
         },{ 
            projectName: "Sanayi Dış2",
            photoLink: "/images/proje4/örnek1.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora architecto accusantium, nihil sunt laborum ab animi exercitationem ea voluptates delectus repudiandae ipsum placeat voluptatibus, laudantium, recusandae maxime sed provident ex totam pariatur libero natus! Fugit esse itaque omnis explicabo?",
            location: "İstanbul Sanayi",
            href: "/projects/proje1"
         }
         ,{ 
            projectName: "Sanayi Dış3",
            photoLink: "/images/proje4/örnek1.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora architecto accusantium, nihil sunt laborum ab animi exercitationem ea voluptates delectus repudiandae ipsum placeat voluptatibus, laudantium, recusandae maxime sed provident ex totam pariatur libero natus! Fugit esse itaque omnis explicabo?",
            location: "İstanbul Sanayi",
            href: "/projects/proje1"
         }
         ,{ 
            projectName: "Sanayi Dış4",
            photoLink: "/images/proje4/örnek1.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora architecto accusantium, nihil sunt laborum ab animi exercitationem ea voluptates delectus repudiandae ipsum placeat voluptatibus, laudantium, recusandae maxime sed provident ex totam pariatur libero natus! Fugit esse itaque omnis explicabo?",
            location: "İstanbul Sanayi",
            href: "/projects/proje1"
         }
         ,{ 
            projectName: "Sanayi Dış5",
            photoLink: "/images/proje4/örnek1.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora architecto accusantium, nihil sunt laborum ab animi exercitationem ea voluptates delectus repudiandae ipsum placeat voluptatibus, laudantium, recusandae maxime sed provident ex totam pariatur libero natus! Fugit esse itaque omnis explicabo?",
            location: "İstanbul Sanayi",
            href: "/projects/proje1"
         }
    ]

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        phone: "",
        message: ""
    })

    function handleOnFormChange() {

    }

    return (
        <section className="flex flex-col items-center bg-[url('/images/bg-image.png')] bg-cover bg-center">
            {/* PROJECT CARDS */}
            <div className="pt-8">
                {/* CARD HEADER */}
                <div className="text-center text-3xl font-thin">PROJELERİMİZ</div>
                {/* CARD CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-3">
                    {allProjects.map((project) => (
                        // CARD PHOTO
                        <div key={project.projectName} className="cursor-pointer hover:shadow-brand-yellow shadow-xl rounded-lg transition-shadow duration-300  bg-white">
                            <div className="relative w-full h-64 overflow-hidden">
                                <Image
                                src={project.photoLink}
                                alt="logo"
                                fill
                                className="object-cover rounded-t-lg"
                            />
                            </div>
                            {/* CARD DETAİLS */}
                            <div className="flex flex-col items-center p-4 font-thin">
                                <div className="font-bold text-lg p-2">{project.projectName}</div>
                                <div className="text-sm text-center">{project.content}</div>
                                <hr className="border-t border-gray-400 w-full my-2"/>
                                <div className="flex w-full justify-between text-sm text-gray-400 p-2">
                                    <div className="flex">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-brand-yellow"/>
                                        <div className="text-">{project.location}</div>
                                    </div>
                                    <div>0 544 444 44 44</div>
                                </div>
                            </div>
                    </div>
                    ))}
                </div>
            </div>

            {/* CONTACT US FORM */}
            <div className="bg-brand-black md:h-76  w-[90vw] mt-6 p-10">
                <div className="text-white text-xl text-center md:text-start">
                    Sizde Demirel Group Projelerinde <div className="text-brand-yellow inline-block"> Yerinizi Alın...</div>
                </div>

                <div className="mt-6">
                    <form className="flex flex-col items-center  md:flex-row md:justify-between">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
                            <input 
                            type="text"
                            name="name"
                            placeholder="Adınız"
                            value={formData.name}
                            onChange={handleOnFormChange}
                            className="bg-white text-black rounded-xl p-4 w-[60vw] md:w-full"
                            />
                            <input 
                                type="text"
                                name="surname"
                                placeholder="Soyadınız"
                                value={formData.surname}
                                onChange={handleOnFormChange}
                                className="bg-white text-black rounded-xl p-4 w-[60vw] md:w-full"/>
                            <input 
                                type="tel"
                                name="phone"
                                placeholder="Telefon Numaranız"
                                value={formData.phone}
                                onChange={handleOnFormChange}
                                className="bg-white text-black rounded-xl p-4 w-[60vw] md:w-full"/>
                            <textarea
                                name="message"
                                placeholder="Mesajınız"
                                value={formData.message}
                                onChange={handleOnFormChange}
                                className="bg-white text-black rounded-xl p-4 w-[60vw] md:w-full"/>
                        </div>                   
                        <button type="submit" className="w-[60vw] mt-6 p-6 md:mt-0 md:w-64 md:ml-5 lg:ml-0 bg-brand-yellow rounded-xl text-white cursor-pointer">Formu Gönder</button>
                    </form>
                </div>
            </div>
        </section>
    )
}