export type CompanyInformationType = {
    id: number,
    aboutUsText: string,
    companyAdress: string, 
    companyEmail: string,
    companyName: string,
    contactNumber1: string,
    contactNumber2: string,
    footerText: string
}

export type Project = {
    id: number,
    title: string,
    category: string,
    startDate: string,
    endDate: string,
    area: string,
    apartmentType: string,
    contactNumber: string,
    details: string,
    photos: ProjectPhoto[]
};

type ProjectPhoto = {
    id: number,
    projectId: number,
    photoUrl: string
}