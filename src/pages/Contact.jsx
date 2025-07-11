import bgImage from "../assets/contact-bg.png";
import Title from "../components/Title";
import SocialMediaIcon from "../components/SocialMediaIcon";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact ASMoldova - Cum ne poți găsi</title>
        <meta
          name="description"
          content="Contactează Alianța Studenților din Moldova pentru informații și colaborări."
        />
      </Helmet>
      <section className="font-dm relative bg-blue-100 px-2 pt-16 pb-0 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="absolute top-0 left-0 w-full h-full bg-no-repeat"
        ></div>
        <div className="relative flex flex-wrap items-stretch justify-between max-w-[1880px] mx-auto py-8 gap-4 lg:gap-12 xl:py-16 xl:flex-nowrap">
          <div className="text-blue-500 w-full">
            <Title
              title="Contactează-ne acum!"
              highlited="acum"
              customClassName="my-0 text-center xl:text-start"
            />
            <p className="text-base w-full text-center my-4 md:my-6 lg:text-2xl xl:max-w-[610px] xl:text-start">
              Vrei să te implici, să aduci schimbare și să reprezinți vocea
              studenților? Indiferent dacă alegi să devii voluntar sau membru
              activ, locul tău poate fi în echipa noastră!
            </p>
            <div className="bg-white flex justify-evenly shadow-sm rounded-xl py-4 px-4 my-4 lg:py-8 lg:px-8 lg:my-12">
              <div className="text-center">
                <svg
                  className="mx-auto w-[33px] h-[30px] lg:w-[44px] lg:h-[40px]"
                  viewBox="0 0 44 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.25 0H2.75C2.02065 0 1.32118 0.289731 0.805456 0.805456C0.289731 1.32118 0 2.02065 0 2.75V30.25C0 30.9793 0.289731 31.6788 0.805456 32.1945C1.32118 32.7103 2.02065 33 2.75 33H41.25C41.9793 33 42.6788 32.7103 43.1945 32.1945C43.7103 31.6788 44 30.9793 44 30.25V2.75C44 2.02065 43.7103 1.32118 43.1945 0.805456C42.6788 0.289731 41.9793 0 41.25 0ZM39.1325 30.25H5.0325L14.6575 20.295L12.6775 18.3838L2.75 28.655V4.84L19.8413 21.8487C20.3565 22.3609 21.0535 22.6484 21.78 22.6484C22.5065 22.6484 23.2035 22.3609 23.7188 21.8487L41.25 4.41375V28.4762L31.13 18.3563L29.1912 20.295L39.1325 30.25ZM4.55125 2.75H39.0225L21.78 19.8962L4.55125 2.75Z"
                    fill="#4965AB"
                  />
                </svg>
                <h2 className="font-bold text-base py-1 lg:py-4 lg:text-2xl">
                  Email
                </h2>
                <a
                  href="mailto:asmoldova.info@gmail.com"
                  className="text-sm lg:text-lg"
                >
                  asmoldova.info
                  <wbr />
                  @gmail.com
                </a>
              </div>
              <div className="w-[2px] mx-2 max-h-40 bg-gray-100"></div>
              <div className="text-center">
                <svg
                  width="43"
                  height="40"
                  className="mx-auto w-[33px] h-[30px] lg:w-[43px] lg:h-[40px]"
                  viewBox="0 0 43 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.47492 1.7152C8.15833 -0.900964 12.577 -0.436107 14.8239 2.5087L17.6065 6.14972C19.4366 8.54535 19.2734 11.8923 17.1016 14.009L16.5768 14.5236C16.5173 14.7396 16.5112 14.9665 16.5591 15.1852C16.6981 16.0674 17.4499 17.9354 20.5986 21.0057C23.7472 24.0759 25.6655 24.811 26.5784 24.9494C26.8084 24.9947 27.0459 24.9881 27.2729 24.9299L28.1725 24.0521C30.1041 22.171 33.0675 21.8186 35.4577 23.0921L39.6691 25.3407C43.2786 27.2607 44.1892 32.0692 41.2346 34.9513L38.1014 38.0043C37.1136 38.9664 35.7862 39.7686 34.1678 39.9177C30.1768 40.2831 20.8786 39.8161 11.1041 30.2876C1.9823 21.3927 0.231578 13.635 0.0088793 9.81235C-0.101368 7.87941 0.829116 6.24485 2.01537 5.09028L5.47492 1.7152ZM12.1779 4.45245C11.06 2.98869 8.97857 2.87194 7.80554 4.0157L4.34379 7.38861C3.61616 8.09779 3.26778 8.88048 3.31188 9.62857C3.48827 12.6664 4.89943 19.6651 13.4369 27.9893C22.3934 36.72 30.6641 36.9816 33.8613 36.6875C34.514 36.6292 35.1622 36.2962 35.7686 35.7059L38.8996 32.6508C40.174 31.4098 39.894 29.1482 38.0904 28.1882L33.8789 25.9418C32.7147 25.3234 31.3521 25.5267 30.5054 26.3526L29.5021 27.332L28.3335 26.1818C29.5021 27.332 29.4999 27.3342 29.4977 27.3342L29.4955 27.3385L29.4889 27.345L29.4735 27.358L29.4404 27.3882C29.3473 27.473 29.247 27.5496 29.1405 27.6174C28.9641 27.732 28.7304 27.8596 28.4371 27.9655C27.8418 28.1839 27.0524 28.3007 26.0779 28.1536C24.1662 27.8661 21.6327 26.5883 18.2658 23.3062C14.901 20.0241 13.5869 17.5549 13.2914 15.6825C13.1393 14.7269 13.2606 13.9528 13.4855 13.369C13.6092 13.0405 13.7865 12.7339 14.0102 12.461L14.0808 12.3853L14.1117 12.3528L14.1249 12.3399L14.1315 12.3334L14.1359 12.3291L14.7709 11.7107C15.7147 10.7875 15.8469 9.25885 14.9584 8.09346L12.1779 4.45245Z"
                    fill="#4965AB"
                  />
                </svg>
                <h2 className="font-bold text-base py-1 lg:py-4 lg:text-2xl">
                  Număr de telefon
                </h2>
                <a href="tel:+37376020693" className="text-sm lg:text-lg">
                  +373 76 020 693
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 lg:gap-6">
              <SocialMediaIcon href="https://www.facebook.com/asmoldova">
                <svg
                  className="w-[10px] h-[19px] lg:w-[15px] lg:h-[24px]"
                  viewBox="0 0 15 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.66667 13.8H13.119L14.5 9H9.66667V6.6C9.66667 5.364 9.66667 4.2 12.4286 4.2H14.5V0.168C14.0498 0.1164 12.3499 0 10.5546 0C6.80533 0 4.14286 1.9884 4.14286 5.64V9H0V13.8H4.14286V24H9.66667V13.8Z"
                    fill="white"
                  />
                </svg>
              </SocialMediaIcon>
              <SocialMediaIcon href="https://www.instagram.com/as.moldova/">
                <svg
                  className="w-[20px] h-[19px] lg:w-[25px] lg:h-[24px]"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.408 4.152C18.1232 4.152 17.8448 4.23646 17.608 4.39468C17.3712 4.55291 17.1866 4.77781 17.0776 5.04094C16.9686 5.30406 16.9401 5.5936 16.9957 5.87293C17.0512 6.15226 17.1884 6.40885 17.3898 6.61023C17.5912 6.81162 17.8477 6.94877 18.1271 7.00433C18.4064 7.05989 18.6959 7.03138 18.9591 6.92239C19.2222 6.8134 19.4471 6.62883 19.6053 6.39202C19.7635 6.15521 19.848 5.87681 19.848 5.592C19.848 5.21009 19.6963 4.84382 19.4262 4.57377C19.1562 4.30371 18.7899 4.152 18.408 4.152ZM23.928 7.056C23.9044 6.06038 23.718 5.07534 23.376 4.14C23.0723 3.33906 22.5972 2.61415 21.984 2.016C21.3898 1.40091 20.6635 0.929012 19.86 0.636C18.9272 0.283393 17.941 0.092652 16.944 0.0719999C15.672 -6.70552e-08 15.264 0 12 0C8.736 0 8.328 -6.70552e-08 7.056 0.0719999C6.05898 0.092652 5.07281 0.283393 4.14 0.636C3.33838 0.932703 2.61284 1.4041 2.016 2.016C1.40091 2.61021 0.929012 3.33653 0.636 4.14C0.283393 5.07281 0.092652 6.05898 0.0719999 7.056C-6.70552e-08 8.328 0 8.736 0 12C0 15.264 -6.70552e-08 15.672 0.0719999 16.944C0.092652 17.941 0.283393 18.9272 0.636 19.86C0.929012 20.6635 1.40091 21.3898 2.016 21.984C2.61284 22.5959 3.33838 23.0673 4.14 23.364C5.07281 23.7166 6.05898 23.9073 7.056 23.928C8.328 24 8.736 24 12 24C15.264 24 15.672 24 16.944 23.928C17.941 23.9073 18.9272 23.7166 19.86 23.364C20.6635 23.071 21.3898 22.5991 21.984 21.984C22.5987 21.3871 23.074 20.6618 23.376 19.86C23.718 18.9247 23.9044 17.9396 23.928 16.944C23.928 15.672 24 15.264 24 12C24 8.736 24 8.328 23.928 7.056ZM21.768 16.8C21.7595 17.5617 21.6215 18.3165 21.36 19.032C21.1684 19.5542 20.8607 20.0261 20.46 20.412C20.0705 20.8083 19.5997 21.1154 19.08 21.312C18.3645 21.5735 17.6097 21.7115 16.848 21.72C15.648 21.78 15.204 21.792 12.048 21.792C8.892 21.792 8.448 21.792 7.248 21.72C6.45702 21.7355 5.66934 21.6137 4.92 21.36C4.42343 21.1528 3.97429 20.8466 3.6 20.46C3.20171 20.0745 2.89781 19.6022 2.712 19.08C2.41805 18.3545 2.25552 17.5825 2.232 16.8C2.232 15.6 2.16 15.156 2.16 12C2.16 8.844 2.16 8.4 2.232 7.2C2.23638 6.42117 2.37857 5.64927 2.652 4.92C2.86326 4.41349 3.18752 3.96199 3.6 3.6C3.96351 3.18623 4.41436 2.85834 4.92 2.64C5.65128 2.37537 6.42233 2.2374 7.2 2.232C8.4 2.232 8.844 2.16 12 2.16C15.156 2.16 15.6 2.16 16.8 2.232C17.5617 2.2405 18.3165 2.37847 19.032 2.64C19.5773 2.84238 20.0668 3.17142 20.46 3.6C20.8521 3.96963 21.1591 4.42001 21.36 4.92C21.6269 5.65066 21.765 6.42211 21.768 7.2C21.828 8.4 21.84 8.844 21.84 12C21.84 15.156 21.828 15.6 21.768 16.8ZM12 5.844C10.783 5.84637 9.59396 6.20943 8.58319 6.8873C7.57242 7.56517 6.78525 8.52744 6.32116 9.6525C5.85707 10.7776 5.73687 12.015 5.97575 13.2083C6.21464 14.4017 6.80188 15.4974 7.66329 16.3572C8.5247 17.2169 9.62161 17.802 10.8154 18.0386C12.0092 18.2751 13.2464 18.1525 14.3706 17.6862C15.4947 17.22 16.4555 16.4309 17.1314 15.4188C17.8073 14.4068 18.168 13.217 18.168 12C18.1696 11.1901 18.011 10.3879 17.7015 9.63955C17.3919 8.89117 16.9375 8.21137 16.3642 7.63926C15.791 7.06715 15.1103 6.61401 14.3614 6.30592C13.6124 5.99782 12.8099 5.84083 12 5.844ZM12 15.996C11.2097 15.996 10.4371 15.7616 9.77994 15.3226C9.1228 14.8835 8.61063 14.2594 8.30818 13.5292C8.00573 12.799 7.9266 11.9956 8.08078 11.2204C8.23497 10.4453 8.61555 9.73325 9.1744 9.1744C9.73325 8.61555 10.4453 8.23497 11.2204 8.08078C11.9956 7.9266 12.799 8.00573 13.5292 8.30818C14.2594 8.61063 14.8835 9.1228 15.3226 9.77994C15.7616 10.4371 15.996 11.2097 15.996 12C15.996 12.5248 15.8926 13.0444 15.6918 13.5292C15.491 14.014 15.1967 14.4545 14.8256 14.8256C14.4545 15.1967 14.014 15.491 13.5292 15.6918C13.0444 15.8926 12.5248 15.996 12 15.996Z"
                    fill="white"
                  />
                </svg>
              </SocialMediaIcon>
              <SocialMediaIcon href="https://t.me/asmoldova">
                <svg
                  className="w-[18px] h-[16px] lg:w-[23px] lg:h-[21px]"
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0399 0.167751C21.0399 0.167751 23.1674 -0.654674 22.9894 1.34249C22.9308 2.16491 22.3991 5.04367 21.9851 8.15695L20.5667 17.38C20.5667 17.38 20.4485 18.7312 19.3844 18.9663C18.3209 19.2008 16.7252 18.1438 16.4294 17.9088C16.1929 17.7324 11.997 15.0887 10.5195 13.7967C10.1055 13.4438 9.63232 12.7392 10.5786 11.9168L16.7843 6.04198C17.4935 5.33627 18.2026 3.69142 15.2477 5.68913L6.97306 11.2697C6.97306 11.2697 6.02731 11.8576 4.25465 11.3288L0.412522 10.1536C0.412522 10.1536 -1.00582 9.27251 1.41741 8.39146C7.32792 5.6305 14.5976 2.81091 21.0393 0.167209"
                    fill="white"
                  />
                </svg>
              </SocialMediaIcon>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
