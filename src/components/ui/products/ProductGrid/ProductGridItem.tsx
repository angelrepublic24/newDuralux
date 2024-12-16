'use client'
import { Product } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
    product: Product
}

const ProductGridItem = ({product}: Props) => {
    const [displayImage, setDisplayImage] = useState(product.image[0])
    return (
        <>
        <div className="flex w-full items-start justify-between">
            <div className="w-3/4 mx-4 px-4">
            <Link href={`product/${product.slug}`}><h3 className="text-5xl font-semibold text-amber-500 mb-10">{product.title}</h3></Link>
            <p className="text-gray-600 mb-4 text-xl w-3/4">{product.description}</p>
            </div>
            
        </div>
        <div>
            <Image src={`${displayImage}`} width={200} height={200} alt={product.title} />
        </div>
        
        </>
    );
}

export default ProductGridItem;