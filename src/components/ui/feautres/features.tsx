import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <>
      <section className="text-[#0D112D] py-16 flex justify-center">
        <div className="px-10 py-10 rounded-xl w-[95%]">
          {/* Main Title */}
          <div className="mb-12 flex flex-col lg:flex-row justify-between w-full pb-4">
            <div className="w-full lg:w-1/2">
              <p className="mt-4 text-2xl">
                Create high-design canopies, sunshades, and pergolas in minutes.
                Our patented modular system saves you money on customization,
                shipping, and install.
              </p>
            </div>
            <div>
              <a
                href="#"
                className="inline-block mt-8 px-6 py-3 border-2 border-white text-amber-500 font-semibold rounded-lg hover:bg-gray-100 shadow-lg"
              >
                Shop All Products &rarr;
              </a>
            </div>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Feature 1 */}
            <FeatureCard
              title="From Kits to Custom"
              description="Choose every single detail; lean on our designers; or buy one of our popular kits."
              imgSrc="https://duraluxcanopies.com/wp-content/uploads/2024/11/DraftingTools.png"
            />
            {/* Feature 2 */}
            <FeatureCard
              title="Ships Ready to Install"
              description="No cutting, welding, or resizing needed. Interlocking pieces snap together."
              imgSrc="https://duraluxcanopies.com/wp-content/uploads/2024/11/Swatches.png"
            />
            {/* Feature 3 */}
            <FeatureCard
              title="Advanced Lighting"
              description="Crafted of fine materials, and packed with structural and aesthetic innovations."
              imgSrc="https://duraluxcanopies.com/wp-content/uploads/2024/11/Wrench.png"
            />
            {/* Feature 4 */}
            <FeatureCard
              title="Designed to Multicolor"
              description="The weldless structure enables architectural elements with many colors and designs."
              imgSrc="https://duraluxcanopies.com/wp-content/uploads/2024/11/DraftingTools.png"
            />
            {/* Feature 5 */}
            <FeatureCard
              title="Time & Money Friendly"
              description="Custom without cutting corners: Cost-effective, rapid delivery, and always free of errors."
              imgSrc="https://duraluxcanopies.com/wp-content/uploads/2024/11/Clock.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}
function FeatureCard({ title, description, imgSrc }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl text-center flex flex-col items-center w-full relative h-[300px]">
      <div className="bg-amber-500 h-1/4 w-full flex justify-center items-center rounded-t-3xl py-6 px-1">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex justify-center flex-col items-center pt-4 px-2 h-1/2">
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      <div className="w-3/4 flex justify-end absolute bottom-0">
        <Image
          src={imgSrc}
          alt={title}
          width={96}
          height={96}
          className="mb-1 w-24 h-24 relative top-10 bg-gray-200 rounded-full"
        />
      </div>
    </div>
  );
}
