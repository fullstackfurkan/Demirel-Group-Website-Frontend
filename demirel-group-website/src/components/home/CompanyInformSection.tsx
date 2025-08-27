'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHelmetSafety, faCar, faCow } from "@fortawesome/free-solid-svg-icons";

export default function CompanyInformSection() {

    const allField = [
        { 
            fieldName: "Demirel İnşaat",
            explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora architecto accusantium, nihil sunt laborum ab animi exercitationem ea voluptates delectus repudiandae ipsum placeat voluptatibus, laudantium, recusandae maxime sed provident ex totam pariatur libero natus! Fugit esse itaque omnis explicabo?",
            icon: faHelmetSafety,
            href: "/projects/proje1"
         },
         { 
            fieldName: "Demirel Galeri",
            explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora architecto accusantium, nihil sunt laborum ab animi exercitationem ea voluptates delectus repudiandae ipsum placeat voluptatibus, laudantium, recusandae maxime sed provident ex totam pariatur libero natus! Fugit esse itaque omnis explicabo?",
            icon: faCar,
            href: "/projects/proje1"
         },{ 
            fieldName: "Demirel Hayvancılık",
            explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora architecto accusantium, nihil sunt laborum ab animi exercitationem ea voluptates delectus repudiandae ipsum placeat voluptatibus, laudantium, recusandae maxime sed provident ex totam pariatur libero natus! Fugit esse itaque omnis explicabo?",
            icon: faCow,
            href: "/projects/proje1"
         }
    ]
    return (
        <section className="bg-[url('/images/biz-kimiz.png')] bg-black/90 bg-cover bg-center">
            <div className="pt-8">
                <div className="text-center text-xl text-brand-yellow font-thin">Demirel Group Hakkında</div>
                <div className="text-center text-3xl text-white my-4 font-thin">BİZ KİMİZ? NELER YAPIYORUZ?</div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 p-5">
                    {allField.map((project) => (
                        <div key={project.fieldName} className="flex flex-col items-center cursor-pointer hover:shadow-brand-gray shadow-lg rounded-lg transition-shadow duration-300  bg-black text-white p-4">
                            <div>
                                <FontAwesomeIcon icon={project.icon} className="text-brand-yellow" size="3x"/>
                            </div>
                            <div className="font-bold text-lg p-2">{project.fieldName}</div>
                            <div className="text-sm text-center">{project.explanation}</div>    
                            <div className="cursor-pointer text-brand-yellow mt-2">Devamı...</div>                 
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}