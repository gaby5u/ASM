import { useEffect } from "react";

import BgImage from "../assets/line.png";
import BgImageElements from "../assets/elements1.png";

import Title from "../components/Title";
import PartenerSlide from "../components/PartenerSlide";
import CaractWhoAreWe from "../components/CaractWhoAreWe";
import CardNews from "../components/cards/CardNews";
import BlueButton from "../components/BlueButton";
import Gallery from "../components/Gallery";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useLocation } from "react-router";
import "swiper/css";

const Homepage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#galerie") {
      const element = document.getElementById("galerie");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section
        style={{ backgroundImage: `url(${BgImage})` }}
        className="blured-section bg-blue-100 bg-no-repeat bg-cover bg-center w-full h-full font-dm px-2 sm:px-4 py-16 lg:px-10 xl:px-20 xl:py-25 2xl:px-50"
      >
        <div className="flex flex-wrap items-center justify-center gap-8 py-4 sm:py-16 md:flex-nowrap md:justify-between xl:py-25 xl:items-start">
          <div className="text-blue-500">
            <div className="bg-white shadow-sm rounded-full inline-block px-8 py-2">
              <p className="text-gray-200 text-sm lg:text-base">
                Implicare. Respect. Drepturi
              </p>
            </div>
            <div className="max-w-[600px]">
              <h1 className="font-rubik font-bold text-4xl lg:text-6xl/17 mt-8 md:mt-16">
                <span className="text-red-500">Împreună </span>constuim un
                viitor studențesc mai echitabil
              </h1>
              <p className="my-10 text-base lg:text-2xl">
                Ai întâlnit o nedreptate? Nu ești singur! <br />
                Completează chestionarul și fă-ți vocea auzită – suntem alături
                de tine.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeuAVWyYF3NDL4zLAScNairXyxjTLAGy_m4MsMrJfvMRbcv4A/viewform"
                target="_blank"
                className="group flex items-center w-full max-w-[310px] justify-between gap-10 bg-blue-500 hover:bg-blue-400 active:bg-blue-400 text-white rounded-full text-sm px-4 py-2 lg:text-xl lg:px-8 lg:py-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 active:shadow-none"
              >
                Completează acum
                <svg
                  width="27"
                  height="26"
                  className="transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-3"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.18729 12.9888C3.18729 13.5532 3.57768 13.9648 4.14152 13.9648L18.419 13.9648L20.728 13.8779L17.1724 17.1194L14.744 19.5912C14.5706 19.7647 14.4836 20.0247 14.4836 20.274C14.4836 20.8161 14.8953 21.2176 15.4272 21.2176C15.6872 21.2176 15.9147 21.1195 16.1317 20.9137L23.3409 13.716C23.5574 13.5097 23.6661 13.2604 23.6661 12.9898C23.6661 12.7294 23.5574 12.48 23.3409 12.2737L16.1317 5.07559C15.9143 4.86975 15.6872 4.77216 15.4268 4.77216C14.8957 4.77216 14.4836 5.17318 14.4836 5.70419C14.4836 5.9646 14.5706 6.22455 14.744 6.39801L17.1724 8.85876L20.7386 12.1114L18.419 12.0244L4.14152 12.0244C3.57768 12.0244 3.18729 12.425 3.18729 12.9888Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative">
            <img src="/images/students.svg" alt="students" />
            <img
              className="absolute w-[140px] left-[-3%] top-[-17%] xs:top-[-10%] sm:w-[180px] md:top-[-17%] md:left-[-15%] lg:w-[200px] xl:w-[276px] xl:top-[-26%]"
              src="/images/megaphone.svg"
              alt="megafon"
            />
            <img
              className="absolute bottom-[-10%] left-[-5%] w-[140px] sm:w-[180px] md:left-[-21%] lg:w-[230px] xl:w-[330px] xl:left-[-30%]"
              src="/images/hand.svg"
              alt="idee"
            />
            <img
              className="absolute top-[-10%] right-0 w-[100px] sm:w-[150px] md:top-[-18%] lg:w-[200px] xl:right-[-12%] xl:w-[246px]"
              src="/images/graduation-cap.svg"
              alt="absolvire"
            />
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${BgImageElements})` }}
        className="bg-white bg-no-repeat font-dm bg-cover w-full h-full my-16 md:my-24"
      >
        <div className="py-2 px-2 sm:px-4 lg:px-10 xl:px-20 2xl:px-50 xl:py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:gap-8 lg:gap-16 xl:flex-row">
            <Title
              subtitle="Cine suntem"
              title="Suntem Alianța Studenților din Moldova – reprezentăm peste 100.000 de studenți din toată țara, apărăm drepturile lor și susținem implicarea activă în viața academică."
              highlited="Alianța Studenților din Moldova"
              className="xl:max-w-[800px]"
            />
            <div className="flex flex-col gap-8 border-l border-gray-100 ml-[10px] lg:pt-8 lg:gap-12 lg:ml-0">
              <CaractWhoAreWe
                title="Viziunea noastră"
                description="Educație de calitate, accesibilă tuturor studenților, șanse egale și implicare deplină în guvernanța universitară."
              />
              <CaractWhoAreWe
                title="Misiunea noastră"
                description="Reprezentăm și susținem toți studenții și organizațiile lor, încurajând colaborarea și dezvoltarea potențialului."
              />
              <CaractWhoAreWe
                title="Сe facem"
                description="Organizăm campanii, contribuim la politicile educaționale, colaborăm cu instituții cheie și oferim sprijin studenților aflați în situații de nedreptate."
              />
            </div>
          </div>
          <Title
            subtitle="Puterea prezentului"
            title="Organizații și instituții care ne susțin"
            className="mb-8"
          />
        </div>

        <Swiper
          className="w-full max-h-[300px]"
          spaceBetween={30}
          slidesPerView={7}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <PartenerSlide
              partener="ansor"
              image="/images/ansor-logo.png"
              alt="ansor"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartenerSlide
              partener="alda"
              image="/images/alda-logo.png"
              alt="alda"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartenerSlide
              partener="mec"
              image="/images/mec-logo.png"
              alt="mec"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartenerSlide
              partener="ant"
              image="/images/ant-logo.png"
              alt="ant"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartenerSlide
              partener="cntm"
              image="/images/cntm-logo.png"
              alt="cntm"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartenerSlide
              partener="erim"
              image="/images/erim-logo.png"
              alt="erim"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartenerSlide
              partener="diez"
              image="/images/diez-logo.png"
              alt="diez"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartenerSlide
              partener="esu"
              image="/images/esu-logo.png"
              alt="esu"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="blured-section font-dm bg-blue-100 py-4 px-2 sm:px-4 lg:px-10 xl:px-20 2xl:px-50 xl:py-8">
        <Title subtitle="noutăți" title="Cele mai proaspete evenimente" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full justify-items-center">
          <CardNews
            date="12.04.2025"
            category="Evenimente"
            title="Curs de Fromare a Ambasadorilor Democrației în rândul tinerilor - de fdsjfkjd"
            description="Discuții despre provocările actuale în educație și oportunitășile de dezvoltare pentru studenți kflsjfl fjksjfl ksj dflk sjdfkjsd"
            img="/images/noutate.jpg"
            alt="Curs de Fromare a Ambasadorilor Democrației în rândul tinerilor - de"
          ></CardNews>
          <CardNews
            date="12.04.2025"
            category="Admitere"
            title="Curs de Fromare a Ambasadorilor Democrației în rândul tinerilor - de fdsjfkjd"
            description="Discuții despre provocările actuale în educație și oportunitășile de dezvoltare pentru studenți kflsjfl fjksjfl ksj dflk sjdfkjsd"
            img="/images/noutate.jpg"
            alt="Curs de Fromare a Ambasadorilor Democrației în rândul tinerilor - de"
          ></CardNews>
          <CardNews
            date="12.04.2025"
            category="Cercetări"
            title="Curs de Fromare a Ambasadorilor Democrației în rândul tinerilor - de fdsjfkjd"
            description="Discuții despre provocările actuale în educație și oportunitășile de dezvoltare pentru studenți kflsjfl fjksjfl ksj dflk sjdfkjsd"
            img="/images/noutate.jpg"
            alt="Curs de Fromare a Ambasadorilor Democrației în rândul tinerilor - de"
          ></CardNews>
          <CardNews
            date="12.04.2025"
            category="Întâlniri"
            title="Curs de Fromare a Ambasadorilor Democrației în rândul tinerilor - de fdsjfkjd"
            description="Discuții despre provocările actuale în educație și oportunitășile de dezvoltare pentru studenți kflsjfl fjksjfl ksj dflk sjdfkjsd"
            img="/images/noutate.jpg"
            alt="Curs de Fromare a Ambasadorilor Democrației în rândul tinerilor - de"
          ></CardNews>
          <CardNews
            date="12.04.2025"
            category="Advocacy"
            title="Curs de Fromare a Ambasadorilor Democrației în rândul tinerilor - de fdsjfkjd"
            description="Discuții despre provocările actuale în educație și oportunitășile de dezvoltare pentru studenți kflsjfl fjksjfl ksj dflk sjdfkjsd"
            img="/images/noutate.jpg"
            alt="Curs de Fromare a Ambasadorilor Democrației în rândul tinerilor - de"
          ></CardNews>
          <CardNews
            date="12.04.2025"
            category="Proiecte"
            title="Curs de Fromare a Ambasadorilor Democrației în rândul tinerilor - de fdsjfkjd"
            description="Discuții despre provocările actuale în educație și oportunitășile de dezvoltare pentru studenți kflsjfl fjksjfl ksj dflk sjdfkjsd"
            img="/images/noutate.jpg"
            alt="Curs de Fromare a Ambasadorilor Democrației în rândul tinerilor - de"
          ></CardNews>
        </div>
        <div className="text-center">
          <BlueButton
            to="/noutăți"
            text="Vezi toate noutățile"
            className="mt-8 md:mt-16"
          />
        </div>
      </section>

      <section
        id="galerie"
        className="py-4 px-2 sm:px-4 lg:px-10 xl:px-20 2xl:px-50 xl:py-8"
      >
        <Title subtitle="galerie" title="Retrăiește momentele" />
        <Gallery />
      </section>
    </>
  );
};

export default Homepage;
