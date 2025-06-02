import BgImage from "../assets/line.png";

const Homepage = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BgImage})` }}
      className="bg-blue-100 relative bg-no-repeat bg-cover bg-center w-full h-full font-dm py-4 px-2 top-[60px] sm:px-4 lg:px-10 xl:top-[90px] xl:px-20 2xl:px-50 xl:py-6"
    >
      <div className="flex flex-wrap items-center justify-center gap-8 py-8 sm:py-16 md:flex-nowrap md:justify-between xl:py-25 xl:items-start">
        <div className="text-blue-500">
          <div className="bg-white shadow-sm rounded-full inline-block px-8 py-2">
            <p className="text-gray-100 text-sm lg:text-base">
              Implicare. Respect. Drepturi
            </p>
          </div>
          <div className="max-w-[600px]">
            <h1 className="font-rubik font-bold text-4xl lg:text-6xl mt-16">
              <span className="text-red-500">Împreună </span>constuim un viitor
              studențesc mai echitabil
            </h1>
            <p className="my-10 text-base lg:text-2xl"> 
              Ai întâlnit o nedreptate? Nu ești singur! <br />
              Completează chestionarul și fă-ți vocea auzită – suntem alături de
              tine.
            </p>
              <button className="flex items-center justify-between gap-10 bg-blue-500 text-white rounded-full text-sm px-4 py-2 lg:text-xl lg:px-8 lg:py-5">
                Completează acum
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.18729 12.9888C3.18729 13.5532 3.57768 13.9648 4.14152 13.9648L18.419 13.9648L20.728 13.8779L17.1724 17.1194L14.744 19.5912C14.5706 19.7647 14.4836 20.0247 14.4836 20.274C14.4836 20.8161 14.8953 21.2176 15.4272 21.2176C15.6872 21.2176 15.9147 21.1195 16.1317 20.9137L23.3409 13.716C23.5574 13.5097 23.6661 13.2604 23.6661 12.9898C23.6661 12.7294 23.5574 12.48 23.3409 12.2737L16.1317 5.07559C15.9143 4.86975 15.6872 4.77216 15.4268 4.77216C14.8957 4.77216 14.4836 5.17318 14.4836 5.70419C14.4836 5.9646 14.5706 6.22455 14.744 6.39801L17.1724 8.85876L20.7386 12.1114L18.419 12.0244L4.14152 12.0244C3.57768 12.0244 3.18729 12.425 3.18729 12.9888Z"
                  fill="white"
                />
              </svg>
              </button>
          </div>
        </div>
          <div className="relative">
          <img src="/images/students.png" alt="students" />
          <img className="absolute w-[140px] left-[-3%] top-[-17%] xs:top-[-10%] sm:w-[180px] md:top-[-17%] md:left-[-15%] lg:w-[200px] xl:w-[276px] xl:top-[-26%]" src="/images/megaphone.svg" alt="megafon" />
          <img className="absolute bottom-[-10%] left-[-5%] w-[140px] sm:w-[180px] md:left-[-21%] lg:w-[230px] xl:w-[330px] xl:left-[-30%]" src="/images/hand.svg" alt="idee" />
          <img className="absolute top-[-10%] right-0 w-[100px] sm:w-[150px] md:top-[-18%] lg:w-[200px] xl:right-[-12%] xl:w-[246px]" src="/images/graduation-cap.png" alt="absolvire" />
          </div>
      </div>
    </section>
  );
};

export default Homepage;
