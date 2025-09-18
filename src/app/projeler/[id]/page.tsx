'use client'

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

type Project = {
    id: number;
    title: string;
    category: string;
    startDate: Date;
    endDate: Date;
    area: string;
    apartmentType: string;
    numberOfApartment: number;
    numberOfStore: number;
    contactNumber: number;
}

export default function ProjectDetailPage() {
    return (
        <div>
            
        </div>
    )
}