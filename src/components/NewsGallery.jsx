import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import ImageModal from "./ImageModal";

const NewsGallery = ({ images }) => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [modalImageNumber, setModalImageNumber] = useState(null);

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
          images={images.slice(1, 4)}
          activity={setIsActiveModal}
        />
      )}

      <div className="news-gallery-grid h-[400px] gap-2 md:gap-4 lg:h-[680px]">
        {images.slice(1, 4).map((img, i) => (
          <div
            key={i}
            className={`new-area-${
              ["a", "b", "c"][i]
            } relative h-full rounded-md overflow-hidden cursor-pointer group hover:bg-blue-400`}
            onClick={() => openModal(img, i + 1)}
          >
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover"
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
    </>
  );
};

export default NewsGallery;
