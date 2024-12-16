import { Product } from "@/interfaces/product.interface";
import ProductGridItem from "./ProductGridItem";


interface Props {
  products: Product[];
}

const ProductGrid = ({ products }: Props) => {
  return (
    <div className="container w-3/4 px-6 grid grid-cols-1  lg:grid-cols-2 gap-12">
      {products.map((product) => (
        <ProductGridItem key={product.id} product={product} />
      ))}
    </div>
  );
};


export default ProductGrid