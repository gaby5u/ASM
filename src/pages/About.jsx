import { useEffect } from "react";
import BgImage from "../assets/about-bg.png";
import Title from "../components/Title";
import BlueButton from "../components/buttons/BlueButton";
import StateCard from "../components/cards/StateCard";
import Objective from "../components/Objective";
import Paginate from "../components/Paginate";
import TeamMember from "../components/cards/TeamMember";
import { Link, useLocation } from "react-router";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.hash) {
      case "#echipa":
        {
          const element = document.getElementById("echipa");
          element.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "#proiecte": {
        const element = document.getElementById("proiecte");
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section
        style={{ backgroundImage: `url(${BgImage})` }}
        className="text-blue-500 blured-section bg-blue-100 bg-no-repeat bg-cover bg-center w-full h-full font-dm py-4 px-2 pt-[60px] sm:px-4 lg:px-10 xl:px-20 2xl:px-50 xl:py-6 xl:pt-[96px]"
      >
        <div className="flex flex-wrap justify-center items-center gap-[5%] py-8 xl:py-16 xl:flex-nowrap xl:justify-between">
          <img
            src="/images/about-img.jpg"
            alt="Ședință de informare organizată de ALDA Moldova"
            className="w-full max-w-[750px] rounded-xl"
          />
          <div className="text-center max-w-full xl:max-w-[700px] xl:text-start">
            <Title
              title="Alianța Studenților din Moldova e despre vocea voastră – a studenților"
              highlited="vocea voastră"
              customClassName="my-4 md:my-8"
            />
            <p className="my-0 text-base lg:text-2xl">
              La ASM, credem în puterea studenților de a schimba lucrurile. Îi
              reprezentăm, îi susținem și luptăm pentru ca vocea lor să fie
              auzită acolo unde contează.
            </p>
            <BlueButton
              to="#echipa"
              text="Vezi echipa"
              className="px-16 my-8 xl:my-16"
            />
          </div>
        </div>
        <div className="bg-white shadow-sm grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-8 px-8 xl:px-24 xl:py-16 rounded-xl">
          <StateCard
            svg={
              <svg
                width="32"
                height="25"
                viewBox="0 0 32 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.67857C0 1.19978 1.19444 0 2.66667 0H8C9.47222 0 10.6667 1.19978 10.6667 2.67857V3.57143H21.3333V2.67857C21.3333 1.19978 22.5278 0 24 0H29.3333C30.8056 0 32 1.19978 32 2.67857V8.03571C32 9.51451 30.8056 10.7143 29.3333 10.7143H24C22.5278 10.7143 21.3333 9.51451 21.3333 8.03571V7.14286H10.6667V8.03571C10.6667 8.13058 10.6611 8.22545 10.65 8.31473L15.1111 14.2857H20.4444C21.9167 14.2857 23.1111 15.4855 23.1111 16.9643V22.3214C23.1111 23.8002 21.9167 25 20.4444 25H15.1111C13.6389 25 12.4444 23.8002 12.4444 22.3214V16.9643C12.4444 16.8694 12.45 16.7746 12.4611 16.6853L8 10.7143H2.66667C1.19444 10.7143 0 9.51451 0 8.03571V2.67857Z"
                  fill="#4965AB"
                />
              </svg>
            }
            number="41+"
            title="Proiecte implementate"
          />
          <StateCard
            svg={
              <svg
                width="30"
                height="22"
                viewBox="0 0 30 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9998 11C18.7148 11 17.4723 10.4262 16.4998 9.38499C15.5542 8.36937 14.9767 7.01499 14.8749 5.57249C14.7661 4.03375 15.2355 2.61875 16.1961 1.5875C17.1567 0.556249 18.4998 0 19.9998 0C21.4892 0 22.8361 0.566249 23.7936 1.595C24.7604 2.63375 25.231 4.04625 25.1223 5.57187C25.0179 7.01624 24.441 8.36999 23.4973 9.38436C22.5273 10.4262 21.2854 11 19.9998 11ZM28.2392 22H11.7611C11.4962 22.0014 11.2345 21.942 10.9961 21.8264C10.7577 21.7108 10.549 21.542 10.3861 21.3331C10.2133 21.1066 10.094 20.844 10.037 20.5648C9.98011 20.2857 9.98706 19.9973 10.0574 19.7212C10.5836 17.6081 11.8874 15.8556 13.8274 14.6537C15.5492 13.5875 17.7411 13 19.9998 13C22.3029 13 24.4373 13.5625 26.1692 14.6281C28.1135 15.8237 29.4192 17.5862 29.9429 19.725C30.0124 20.0013 30.0185 20.2896 29.961 20.5686C29.9034 20.8476 29.7836 21.11 29.6104 21.3362C29.4476 21.5442 29.2395 21.7121 29.0018 21.8272C28.7641 21.9422 28.5032 22.0013 28.2392 22ZM8.18738 11.25C5.98802 11.25 4.05428 9.20499 3.87491 6.69187C3.78616 5.40437 4.18741 4.21375 4.9999 3.34062C5.80365 2.47625 6.93739 2 8.18738 2C9.43738 2 10.5624 2.47875 11.3705 3.34812C12.1892 4.22812 12.5892 5.41624 12.4955 6.69312C12.3161 9.20561 10.383 11.25 8.18738 11.25ZM12.2911 13.2156C11.1917 12.6781 9.76488 12.4094 8.18801 12.4094C6.34677 12.4094 4.55866 12.8894 3.15241 13.7606C1.55805 14.75 0.485551 16.1906 0.0524286 17.93C-0.0109553 18.1802 -0.0169503 18.4414 0.0348921 18.6943C0.0867345 18.9471 0.195072 19.1849 0.351802 19.39C0.500519 19.5809 0.691041 19.7352 0.908716 19.8409C1.12639 19.9467 1.36542 20.0011 1.60742 20H8.54488C8.66198 20 8.77535 19.9588 8.86524 19.8838C8.95513 19.8088 9.01583 19.7046 9.03676 19.5894C9.04363 19.55 9.05238 19.5106 9.06238 19.4719C9.59238 17.3431 10.8342 15.5444 12.6692 14.2331C12.7367 14.1845 12.791 14.1197 12.8272 14.0448C12.8633 13.9699 12.8802 13.8871 12.8763 13.804C12.8724 13.7209 12.8478 13.6401 12.8048 13.5689C12.7617 13.4977 12.7016 13.4383 12.6299 13.3962C12.5317 13.3387 12.4192 13.2781 12.2911 13.2156Z"
                  fill="#4965AB"
                />
              </svg>
            }
            number="3000+"
            title="Studenți implicați"
          />
          <StateCard
            svg={
              <svg
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 6V7C30 7.1326 29.9473 7.25978 29.8536 7.35355C29.7598 7.44732 29.6326 7.5 29.5 7.5H28V8.25C28 8.66418 27.6642 9 27.25 9H2.75C2.33581 9 2 8.66418 2 8.25V7.5H0.5C0.367392 7.5 0.240215 7.44732 0.146447 7.35355C0.0526784 7.25978 0 7.1326 0 7V6C7.1509e-07 5.90108 0.0293424 5.80438 0.0843126 5.72214C0.139283 5.63991 0.217411 5.57582 0.308812 5.538L14.8088 0.0379964C14.9312 -0.0126655 15.0688 -0.0126655 15.1912 0.0379964L29.6912 5.538C29.7826 5.57582 29.8607 5.63991 29.9157 5.72214C29.9707 5.80438 30 5.90108 30 6ZM28.5 25H1.5C0.671562 25 0 25.6716 0 26.5V27.5C0 27.6326 0.0526784 27.7598 0.146447 27.8535C0.240215 27.9473 0.367392 28 0.5 28H29.5C29.6326 28 29.7598 27.9473 29.8536 27.8535C29.9473 27.7598 30 27.6326 30 27.5V26.5C30 25.6716 29.3284 25 28.5 25ZM5 10V22H2.75C2.33581 22 2 22.3358 2 22.75V24H28V22.75C28 22.3358 27.6642 22 27.25 22H25V10H21V22H17V10H13V22H9V10H5Z"
                  fill="#4965AB"
                />
              </svg>
            }
            number="7"
            title="Universități partenere"
          />
          <StateCard
            svg={
              <svg
                width="26"
                height="28"
                viewBox="0 0 26 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 25.2V5.6C26 4.0558 24.7043 2.8 23.1111 2.8H20.2222V0H17.3333V2.8H8.66667V0H5.77778V2.8H2.88889C1.29567 2.8 0 4.0558 0 5.6V25.2C0 26.7442 1.29567 28 2.88889 28H23.1111C24.7043 28 26 26.7442 26 25.2ZM8.66667 22.4H5.77778V19.6H8.66667V22.4ZM8.66667 16.8H5.77778V14H8.66667V16.8ZM14.4444 22.4H11.5556V19.6H14.4444V22.4ZM14.4444 16.8H11.5556V14H14.4444V16.8ZM20.2222 22.4H17.3333V19.6H20.2222V22.4ZM20.2222 16.8H17.3333V14H20.2222V16.8ZM23.1111 9.8H2.88889V7H23.1111V9.8Z"
                  fill="#4965AB"
                />
              </svg>
            }
            number="25+"
            title="Ani de activitate"
          />
          <StateCard
            svg={
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.2632 0.0760252L7.8 5.98927V15.1429L8.7724 15.492L7.3073 18.4395C7.14065 18.7746 7.04754 19.1419 7.03427 19.5163C7.021 19.8908 7.08788 20.2638 7.23039 20.61C7.37289 20.9562 7.58769 21.2675 7.86024 21.523C8.13279 21.7784 8.45672 21.972 8.8101 22.0905L14.1193 23.8702C14.7132 24.065 15.3568 24.0399 15.9339 23.7994C16.511 23.5589 16.9836 23.1188 17.2666 22.5586L18.9605 19.1509L24.2632 21.0561C24.4593 21.1265 24.6693 21.1485 24.8756 21.1202C25.0819 21.0919 25.2784 21.0142 25.4486 20.8936C25.6188 20.773 25.7577 20.6131 25.8537 20.4272C25.9496 20.2414 25.9998 20.035 26 19.8256V1.30653C25.9998 1.09712 25.9496 0.890805 25.8537 0.704957C25.7577 0.519109 25.6188 0.35916 25.4486 0.238569C25.2784 0.117977 25.0819 0.0402693 24.8756 0.0119834C24.6693 -0.0163025 24.4593 0.00566065 24.2632 0.0760252ZM14.9409 21.3896L9.633 19.6099L11.2385 16.3786L16.4931 18.2669L14.9409 21.3896ZM2.6 15.1429H5.2V5.98927H2.6C1.1661 5.98927 0 7.16224 0 8.60459V12.5276C0 13.9699 1.1661 15.1429 2.6 15.1429Z"
                  fill="#4965AB"
                />
              </svg>
            }
            number="5+"
            title="Campanii de informare"
          />
        </div>
      </section>

      <section className="flex flex-wrap h-full items-stretch justify-center items-start gap-4 text-blue-500 font-dm py-8 mt-8 px-2 sm:px-4 md:gap-8 lg:flex-nowrap lg:px-10 xl:px-20 2xl:px-50 xl:py-16 xl:mt-16 ">
        <div className="w-full flex flex-col justify-between lg:max-w-[800px]">
          <Title
            subtitle="Cunoaște-ne"
            title="Cine suntem noi?"
            highlited="noi"
            customClassName="mt-0"
          />
          <h6 className="my-4 font-bold text-base md:mt-6 lg:text-xl">
            Alianța Studenților din Moldova (ASM) este o organizație
            nonguvernamentală și apolitică, ce funcționează ca o platformă
            națională unică pentru sectorul asociativ studențesc. Alianța
            asigură reprezentarea intereselor, precum și promovarea și
            respectarea drepturilor a peste 100.000 de studenți din Republica
            Moldova.
          </h6>
          <p className="text-sm lg:text-lg">
            ASM a fost fondată la data de 20 februarie 2000 de un grup de
            studenți entuziaști, care au înțeles importanța mișcărilor
            studențești și nevoia de reprezentare la nivel național. În prezent,
            ASM reunește peste 10 organizații studențești membre, atât la nivel
            local, cât și național, luptând împreună pentru autoguvernare
            studențească, mecanisme de reprezentare și parteneriat în procesul
            educațional.
          </p>
          <div className="bg-blue-100 flex flex-wrap justify-between items-center gap-4 mt-4 rounded-xl py-4 px-4 sm:py-8 sm:px-8 md:py-12 md:mt-8 md:flex-nowrap">
            <div>
              <p className="font-bold text-base lg:text-2xl">
                Alătură-te echipei ASM!
              </p>
              <p className="text-sm mt-2 w-full max-w-[460px] lg:text-lg">
                Fii vocea schimbării alături de noi — implică-te ca voluntar.
              </p>
            </div>
            <Link
              to="/contact"
              className="contact-button border rounded-full py-2 px-5 text-blue-400 text-sm lg:text-base whitespace-nowrap hover:text-white"
            >
              Contactează-ne
            </Link>
          </div>
        </div>
        <div className="bg-blue-100 py-4 px-4 rounded-xl flex flex-col justify-center items-start w-full sm:py-8 sm:px-8 md:py-10 md:px-12">
          <h3 className="font-bold text-base lg:text-2xl">Obiectivele ASM:</h3>
          <Objective title="Desfăşurarea de campanii de sensibilizare şi advocacy pentru problemele cheie care afectează studenții, cu scopul de a aduce schimbări pozitive în legislație sau practici instituţionale" />
          <Objective title="Conştientizarea și promovarea drepturilor și obligațiilor studenților, facilitând o înţelegere clară a acestora şi promovând respectul reciproc în comunitatea academică" />
          <Objective title="Încurajarea şi facilitarea participării active a studenților în viața academică, socială, economică şi culturală, promovând implicarea în diverse activități și proiecte relevante" />
          <Objective title="Promovarea solidarității între studenţi şi crearea unui sentiment de comunitate, facilitând schimbul de idei şi sprijinul reciproc" />
          <Objective title="Asigurarea accesului la resurse şi informații relevante pentru nevoile studenților, pentru a îmbunătăți experienţa lor educaţională şi dezvoltarea personală" />
        </div>
      </section>

      <section
        id="proiecte"
        className="blured-section bg-blue-100 px-2 sm:px-4 lg:px-10 xl:px-20 2xl:px-50"
      >
        <Title
          subtitle="fapte,  nu vorbe"
          title="Proiectele noastre"
          customClassName="py-8 md:py-16"
        />
        <Paginate />
      </section>

      <section
        id="echipa"
        className="text-blue-500 py-4 px-2 sm:px-4 lg:px-10 xl:px-20 2xl:px-50 xl:py-6"
      >
        <div className="flex flex-wrap justify-between sm:flex-nowrap items-center bg-blue-100 rounded-xl px-4 py-6 my-8 md:my-16 md:px-18 md:py-10">
          <div className="w-full max-w-[820px]">
            <Title
              subtitle="Echipa noastră"
              title="Cunoaște-i pe cei din spatele ASM"
              customClassName="my-0"
            />
            <p className="font-dm pt-6 text-sm lg:text-lg">
              Fiecare proiect, fiecare luptă pentru drepturile studenților
              pornește de la ei — echipa ASM. Oameni implicați, curajoși și
              dedicați, care luptă zi de zi pentru ca vocea studenților să fie
              auzită și respectată.
            </p>
          </div>
          <div className="flex items-start w-full justify-end sm:w-auto gap-4 md:gap-6">
            <img
              src="/images/hands.svg"
              alt="Colaborare"
              className="w-full max-w-[100px] sm:max-w-[170px]"
            />
            <img
              src="/images/books.svg"
              alt="Cărți"
              className="w-full max-w-[100px] sm:max-w-[245px]"
            />
          </div>
        </div>

        <div className="font-dm">
          <div>
            <h2 className="font-rubik font-bold text-xl lg:text-[32px]">
              Componența Boardului
            </h2>
            <div className="flex flex-wrap items-center gap-2 my-4 md:gap-5 md:my-6">
              <TeamMember
                src="/images/teamMembers/Cristina-Talmazan.jpg"
                name="Adelina Fărîmă"
                funct="Administrator, Președinte"
                gmail="adelinafarima.info@gmail.com"
              />
              <TeamMember
                src="/images/teamMembers/Yehor-Yudaiev.jpg"
                name="Yehor Yudaiev"
                funct="Vicepreședinte"
                gmail="yehor.yudaiev@gmail.com"
              />
              <TeamMember
                src="/images/teamMembers/Denis-Parnăo.jpg"
                name="Denis Parnăo"
                funct="Secretar General"
                gmail="denisparnao4@gmail.com"
              />
            </div>
          </div>
          <div>
            <h2 className="font-rubik mt-6 font-bold text-xl md:mt-18 lg:text-[32px]">
              Departamentul PR și Comunicare
            </h2>
            <div className="flex flex-wrap items-center gap-2 my-4 mb-8 md:gap-5 md:my-6 md:mb-16">
              <TeamMember
                src="/images/teamMembers/Cristina-Talmazan.jpg"
                name="Cristina Talmazan"
                funct="Designer"
                gmail=" kristinatalmazan7@gmail.com"
              />
              <TeamMember
                src="/images/teamMembers/Valeria-Tofan.jpg"
                name="Valeria Tofan"
                funct="Comunicator"
                gmail="valeriatofan2006@gmail.com"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
