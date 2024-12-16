import ProductGrid from '@/components/ui/products/ProductGrid/ProductGrid';
import { products } from '@/utils/products';

export default function() {

    return (
        <div className='py-16 bg-white w-full flex justify-center'>

            <ProductGrid products={products}/>
        </div>
    );
}