export interface Products {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    type: string;
}

export interface AllProducts {
    label: string,
    data: Products[]
}
