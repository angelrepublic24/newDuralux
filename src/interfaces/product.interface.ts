export interface Product{
    id: number;
    title: string;
    image: string[];
    description: string;
    color: string[];
    slug: string;
    type: ProductType;
    sizeOptions: SizeOption[];
}


export interface SizeOption {
    width: number;
    length: number;
    price: number;
}




export type ProductType = 'Canopies' | 'Sunshades' | 'Pergolas';