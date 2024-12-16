"use client";
import { useState } from "react";
import { products } from "@/utils/products";
import { useParams } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
// import ThreeDViewer from "@/components/ui/threeDViewer/ThreeDViewer";

const DynamicThreeDViewer = dynamic(() => import("@/components/ui/threeDViewer/ThreeDViewer"), {
  ssr: false,
});
export default function () {
  const params = useParams();
  const { slug } = params;

  const product = products.find((product) => product.slug === slug);

  if (!product)
    return <div className="text-center text-xl">Product not found</div>;

  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [width, setWidth] = useState<number | null>(null);
  const [length, setLength] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const maxWidth = Math.max(
    ...product.sizeOptions.map((option) => option.width)
  );
  const maxLength = Math.max(
    ...product.sizeOptions.map((option) => option.length)
  );
  const modelPaths  = {
    Black: "/black.glb",
    Bronze: "/bronze.glb",
    Silver: "/silver.glb",
    White: "/white.glb",
  };

  const handleCalculatePrice = () => {
    if (!product || width === null || length === null) return;

    const sizeOption = product.sizeOptions.find(
      (option) => option.width === width && option.length === length
    );

    if (sizeOption) {
      setPrice(sizeOption.price * quantity);
      setError(null); // Clear any previous errors
    } else {
      setPrice(null);
      setError("Invalid width or length selected.");
    }
  };

  const handleWidthChange = (value: number) => {
    if (value > maxWidth) {
      setError(`Width cannot exceed ${maxWidth}`);
    } else {
      setWidth(value);
      setError(null); // Clear error when valid
    }
  };

  const handleLengthChange = (value: number) => {
    if (value > maxLength) {
      setError(`Length cannot exceed ${maxLength}`);
    } else {
      setLength(value);
      setError(null); // Clear error when valid
    }
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(quantity + change, 1);
    setQuantity(newQuantity);

    if (price !== null && width !== null && length !== null) {
      handleCalculatePrice();
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-8 p-8 mx-auto container">
        {/* Imagen del Producto */}
        <div className="w-7/12">
        <DynamicThreeDViewer selectedColor={selectedColor} modelPaths={modelPaths} />
          {/* <Image
            width={500}
            height={500}
            src={product.image[0]}
            alt={product.title}
            className="w-full rounded-lg h-[800px]"
            quality={100}
          /> */}
        </div>

        {/* Detalles del Producto */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <div className="my-6">
            <h2 className="text-xl font-semibold mb-4">Available Colors</h2>
            <div className="flex flex-wrap gap-4">
              {product.color.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded cursor-pointer border-4 ${
                    selectedColor === color ? "border-yellow-400" : "border-transparent"
                  }`}
                  style={{
                    backgroundColor:
                      color.toLowerCase() === "bronze"
                        ? "#cd7f32" // Código hexadecimal para Bronze
                        : color.toLowerCase(),
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Inputs para seleccionar tamaño */}
          <div className="mt-6">
            <label className="block mb-2 font-medium">
              Width:
              <input
                type="number"
                value={width || ""}
                onChange={(e) => handleWidthChange(Number(e.target.value))}
                placeholder={`Max width: ${maxWidth}`}
                className="border border-gray-300 rounded px-4 py-2 mt-2 w-full"
              />
            </label>
            <label className="block mb-2 font-medium">
              Length:
              <input
                type="number"
                value={length || ""}
                onChange={(e) => handleLengthChange(Number(e.target.value))}
                placeholder={`Max length: ${maxLength}`}
                className="border border-gray-300 rounded px-4 py-2 mt-2 w-full"
              />
            </label>
          </div>
          {/* Controles de cantidad */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              +
            </button>
          </div>

          {/* Mostrar mensajes de error */}
          {error && <span className="text-red-600 mt-2 block">{error}</span>}

          {/* Botón para calcular el precio */}
          <button
            onClick={handleCalculatePrice}
            className="bg-amber-500 text-white py-2 px-4 rounded mt-4 hover:bg-amber-700"
          >
            Calculate Price
          </button>

          {/* Mostrar precio calculado */}
          {price !== null && (
            <div className="mt-4 text-xl font-semibold">
              Price: <span className="text-green-600">${price.toFixed(2)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
