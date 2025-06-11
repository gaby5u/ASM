import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

import ImageModal from "./ImageModal.jsx";

const Gallery = () => {
  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img6.jpg",
    "img5.jpg",
    "img4.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
    "img11.jpg",
    "img12.jpg",
    "img13.jpg",
    "img11.jpg",
    "img11.jpg",
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isSwiperReady, setIsSwiperReady] = useState(false);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [modalImageNumber, setModalImageNumber] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsSwiperReady(true);
    }, 0);
  }, []);

  const openModal = (src, nrImg) => {
    setIsActiveModal(true);
    setModalImg(src);
    setModalImageNumber(nrImg);
  };

  return (
    <>
      {isActiveModal && (
        <ImageModal
          src={modalImg}
          nrImg={modalImageNumber}
          images={images}
          activity={setIsActiveModal}
        />
      )}

      <div className="relative">
        <div className="block md:hidden">
          {isSwiperReady && (
            <Swiper
              keyboard={{ enabled: true }}
              spaceBetween={10}
              slidesPerView={1}
              modules={[Navigation, Keyboard]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`/images/gallery/${src}`}
                    alt={`Image ${index}`}
                    className="gallery-img w-full h-full object-cover rounded-md min-h-[350px] max-h-[350px] cursor-pointer"
                    onClick={() =>
                      openModal(`/images/gallery/${src}`, index + 1)
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        <div className="hidden md:block">
          {isSwiperReady && (
            <Swiper
              keyboard={{ enabled: true }}
              spaceBetween={30}
              slidesPerView={1}
              modules={[Navigation, Keyboard]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              {[0, 5, 10].map((startIndex, i) => (
                <SwiperSlide key={i}>
                  <div className="gallery-grid mb-8 md:mb-16">
                    {images
                      .slice(startIndex, startIndex + 5)
                      .map((src, idx) => (
                        <div
                          key={idx}
                          className={`relative w-full h-[350px] area-${String.fromCharCode(
                            97 + idx
                          )} rounded-md overflow-hidden cursor-pointer group hover:bg-blue-400`}
                          onClick={() =>
                            openModal(
                              `/images/gallery/${src}`,
                              startIndex + idx + 1
                            )
                          }
                        >
                          <img
                            src={`/images/gallery/${src}`}
                            alt={`Image ${startIndex + idx}`}
                            className={`w-full h-full object-cover rounded-md `}
                          />
                          <div className="w-full h-full absolute inset-0 bg-[#232A53] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                          <div className="z-[50] absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 31 31"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M25.1887 12.5919C25.1887 15.3706 24.2865 17.9374 22.7667 20.0199L30.4323 27.6901C31.1892 28.4468 31.1892 29.6757 30.4323 30.4325C29.6755 31.1892 28.4463 31.1892 27.6894 30.4325L20.0238 22.7623C17.9409 24.2878 15.3736 25.1838 12.5944 25.1838C5.63719 25.1838 0 19.5477 0 12.5919C0 5.63609 5.63719 0 12.5944 0C19.5515 0 25.1887 5.63609 25.1887 12.5919ZM11.1412 17.9192C11.1412 18.7244 11.7891 19.3722 12.5944 19.3722C13.3997 19.3722 14.0476 18.7244 14.0476 17.9192V14.0448H17.9227C18.7281 14.0448 19.3759 13.3971 19.3759 12.5919C19.3759 11.7867 18.7281 11.139 17.9227 11.139H14.0476V7.26456C14.0476 6.4594 13.3997 5.81165 12.5944 5.81165C11.7891 5.81165 11.1412 6.4594 11.1412 7.26456V11.139H7.26598C6.46067 11.139 5.81278 11.7867 5.81278 12.5919C5.81278 13.3971 6.46067 14.0448 7.26598 14.0448H11.1412V17.9192Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <button
          ref={prevRef}
          className="absolute top-1/2 z-10 transform bg-red p-2 bg-blue-500 shrink-0 rounded-full flex items-center justify-center left-2 w-8 h-8 md:w-10 md:h-10 md:left-[-10px] xl:w-16 xl:h-16 xl:left-[-5%] transition-all duration-300 active:scale-95 active:bg-blue-400"
        >
          <svg
            className="w-2 h-4 md:w-3 md:h-5"
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
          className="absolute top-1/2 z-10 transform bg-red p-2 bg-blue-500 shrink-0 rounded-full flex items-center justify-center right-2 w-8 h-8 md:w-10 md:h-10 md:right-[-10px] xl:w-16 xl:h-16 xl:right-[-5%] transition-all duration-300 active:scale-95 active:bg-blue-400"
        >
          <svg
            className="w-2 h-4 md:w-3 md:h-5"
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
      </div>
    </>
  );
};

export default Gallery;
