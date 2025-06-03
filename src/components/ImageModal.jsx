import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { useRef, useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageModal = ({ src, nrImg, images, activity }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

useEffect(() => {
  if (swiperInstance && prevRef.current && nextRef.current) {
    swiperInstance.params.navigation.prevEl = prevRef.current;
    swiperInstance.params.navigation.nextEl = nextRef.current;

    swiperInstance.navigation.destroy();
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }
}, [swiperInstance]);

  return (
    <div className="fixed flex justify-center items-center z-1000 top-0 bottom-0 left-0 right-0 bg-[#0D0F1F] w-full h-full">
      <button
        className="absolute top-0 right-0 z-50 p-4 md:p-8"
        onClick={() => activity(false)}
      >
        <svg
        className="w-[10px] h-[10px] md:w-4 md:h-4"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 10.3099L2.1654 16.6445C1.92839 16.8815 1.62674 17 1.26046 17C0.89417 17 0.592522 16.8815 0.355513 16.6445C0.118504 16.4075 0 16.1058 0 15.7395C0 15.3733 0.118504 15.0716 0.355513 14.8346L6.69011 8.5L0.355513 2.1654C0.118504 1.92839 0 1.62674 0 1.26046C0 0.89417 0.118504 0.592522 0.355513 0.355513C0.592522 0.118504 0.89417 0 1.26046 0C1.62674 0 1.92839 0.118504 2.1654 0.355513L8.5 6.69011L14.8346 0.355513C15.0716 0.118504 15.3733 0 15.7395 0C16.1058 0 16.4075 0.118504 16.6445 0.355513C16.8815 0.592522 17 0.89417 17 1.26046C17 1.62674 16.8815 1.92839 16.6445 2.1654L10.3099 8.5L16.6445 14.8346C16.8815 15.0716 17 15.3733 17 15.7395C17 16.1058 16.8815 16.4075 16.6445 16.6445C16.4075 16.8815 16.1058 17 15.7395 17C15.3733 17 15.0716 16.8815 14.8346 16.6445L8.5 10.3099Z"
            fill="white"
          />
        </svg>
      </button>

      <Swiper
        keyboard={{ enabled: true }}
        autoHeight={true}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Navigation, Pagination, Keyboard]}
        pagination={{
          clickable: true,
          type: "fraction",
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        initialSlide={nrImg - 1}
      >
        {images?.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/images/gallery/${imageSrc}`}
              alt={`Image ${index + 1}`}
              className="max-w-[90%] max-h-[80vh] object-contain mx-auto rounded-xl"
            />
          </SwiperSlide>
        ))}

        <button
          ref={prevRef}
          className="absolute z-50 flex justify-center items-center cursor-pointer left-[2%] top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-blue-500 w-10 h-10 xl:w-16 xl:h-16"
        >
          <svg
            className="w-3 h-5"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.750017 10.6103L10.102 19.5631C10.258 19.7125 10.4653 19.7959 10.6809 19.7959C10.8965 19.7959 11.1038 19.7125 11.2598 19.5631L11.2699 19.553C11.3458 19.4805 11.4062 19.3933 11.4476 19.2966C11.4889 19.2 11.5102 19.0959 11.5102 18.9907C11.5102 18.8855 11.4889 18.7814 11.4476 18.6847C11.4062 18.588 11.3458 18.5008 11.2699 18.4284L2.46334 9.99829L11.2699 1.57158C11.3458 1.49913 11.4062 1.41192 11.4476 1.31525C11.4889 1.21859 11.5102 1.11449 11.5102 1.0093C11.5102 0.9041 11.4889 0.800005 11.4476 0.703341C11.4062 0.606676 11.3458 0.519464 11.2699 0.44701L11.2598 0.436893C11.1038 0.287437 10.8965 0.204062 10.6809 0.204062C10.4653 0.204062 10.258 0.287437 10.102 0.436893L0.750017 9.38964C0.66777 9.46837 0.602293 9.56307 0.557554 9.66798C0.512815 9.77289 0.489746 9.88584 0.489746 9.99998C0.489746 10.1141 0.512815 10.2271 0.557554 10.332C0.602293 10.4369 0.66777 10.5316 0.750017 10.6103Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          ref={nextRef}
          className="absolute z-50 flex justify-center items-center cursor-pointer right-[2%] top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-blue-500 w-10 h-10 xl:w-16 xl:h-16"
        >
          <svg
            className="w-3 h-5"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 10.6103L1.89805 19.5631C1.74201 19.7125 1.53469 19.7959 1.31911 19.7959C1.10353 19.7959 0.896215 19.7125 0.740173 19.5631L0.730104 19.553C0.654197 19.4805 0.593753 19.3933 0.552449 19.2966C0.511145 19.2 0.489845 19.0959 0.489845 18.9907C0.489845 18.8855 0.511145 18.7814 0.552449 18.6847C0.593753 18.588 0.654197 18.5008 0.730104 18.4284L9.53666 9.99829L0.730104 1.57158C0.654197 1.49913 0.593753 1.41192 0.552449 1.31525C0.511145 1.21859 0.489845 1.11449 0.489845 1.0093C0.489845 0.9041 0.511145 0.800005 0.552449 0.703341C0.593753 0.606676 0.654197 0.519464 0.730104 0.44701L0.740173 0.436893C0.896215 0.287437 1.10353 0.204062 1.31911 0.204062C1.53469 0.204062 1.74201 0.287437 1.89805 0.436893L11.25 9.38964C11.3322 9.46837 11.3977 9.56307 11.4424 9.66798C11.4872 9.77289 11.5103 9.88584 11.5103 9.99998C11.5103 10.1141 11.4872 10.2271 11.4424 10.332C11.3977 10.4369 11.3322 10.5316 11.25 10.6103Z"
              fill="white"
            />
          </svg>
        </button>
      </Swiper>
    </div>
  );
};

export default ImageModal;
