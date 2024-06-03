export interface Grant {
    id: string;
    title: string;
    image: string;
    requirements: string;
    type: string;
    dateEnd: string;
    initialDate: string;
    educationLevel: string;
}

export interface GrantV {
    _id: string;
    title: string;
    logo: string;
    requirements: string;
    initialDate: string;
    dateEnd: string;
    createdAt: string;
    levelEducation: string;
    levelEducationId: string;
}
