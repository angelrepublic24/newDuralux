'use client'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Instalar módulos

export default function OurProducts() {
    return (
        <section className="py-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Our Products</h2>
            <div className="relative w-full">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="mySwiper"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div
                    className="swiper-slide rounded-3xl flex-shrink-0 w-[65vw] h-[150px] md:h-[600px] relative bg-center bg-no-repeat bg-contain cursor-grab"
                    style={{
                      backgroundImage:
                        "url('https://duraluxcanopies.com/wp-content/uploads/2024/11/canopy1.jpg')",
                      backgroundSize: '100%',
                      backgroundPosition: 'center calc(20%)',
                    }}
                  >
                    <div className="absolute bottom-0 md:bottom-8 left-8">
                      <h4 className="text-xl md:text-3xl font-bold mb-4 text-white">Modular Canopies</h4>
                    </div>
                  </div>
                </SwiperSlide>
    
                {/* Slide 2 */}
                <SwiperSlide>
                  <div
                    className="swiper-slide rounded-3xl flex-shrink-0 w-[65vw] h-[150px] md:h-[600px] relative bg-center bg-no-repeat bg-contain cursor-grab"
                    style={{
                      backgroundImage:
                        "url('https://duraluxcanopies.com/wp-content/uploads/2024/11/canopy2.jpg')",
                      backgroundSize: '100%',
                      backgroundPosition: 'center calc(25%)',
                    }}
                  >
                    <div className="absolute bottom-0 md:bottom-8 left-8">
                      <h4 className="text-xl md:text-3xl font-bold mb-4 text-white">Modular Sunshades</h4>
                    </div>
                  </div>
                </SwiperSlide>
    
                {/* Slide 3 */}
                <SwiperSlide>
                  <div
                    className="swiper-slide rounded-3xl flex-shrink-0 w-[65vw] h-[150px] md:h-[600px] relative bg-center bg-no-repeat bg-contain cursor-grab"
                    style={{
                      backgroundImage:
                        "url('https://duraluxcanopies.com/wp-content/uploads/2024/11/canopy3.jpg')",
                      backgroundSize: '100%',
                      backgroundPosition: 'center calc(5%)',
                    }}
                  >
                    <div className="absolute bottom-0 md:bottom-8 left-8 text-white">
                      <h4 className="text-xl md:text-3xl font-bold mb-4 text-white">Modular Pergolas</h4>
                    </div>
                  </div>
                </SwiperSlide>
    
                {/* Slide 4 */}
                <SwiperSlide>
                  <div
                    className="swiper-slide rounded-3xl flex-shrink-0 w-[65vw] h-[150px] md:h-[600px] relative bg-center bg-no-repeat bg-contain cursor-grab"
                    style={{
                      backgroundImage:
                        "url('https://duraluxcanopies.com/wp-content/uploads/2024/11/canopy4.jpg')",
                      backgroundSize: '100%',
                      backgroundPosition: 'center calc(20%)',
                    }}
                  >
                    <div className="absolute bottom-0 md:bottom-8 left-8 text-white">
                      <h4 className="text-xl md:text-3xl font-bold mb-4 text-white">Our 2025 Pipeline</h4>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      );
}
