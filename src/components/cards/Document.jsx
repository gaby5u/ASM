const Document = ({ title, viewUrl, downloadUrl }) => {
  return (
    <div className="font-dm bg-white rounded-xl shadow-sm flex items-center justify-between gap-2 my-4 py-2 px-4 sm:py-4 sm:px-6 lg:py-10 lg:px-16 lg:my-6">
      <p className="text-base font-bold lg:text-2xl">{title}</p>
      <div className="flex inline-block flex-wrap items-center justify-end gap-2 sm:flex-nowrap sm:flex md:gap-4">
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex w-full items-center justify-center gap-2 bg-blue-400 text-white rounded-xl text-sm py-2 px-4 my-2 sm:max-w-[115px] lg:max-w-[149px] lg:py-3 lg:px-6 lg:text-lg
              transition duration-300 ease-in-out
             hover:bg-blue-500 hover:shadow-md hover:-translate-y-0.5
             active:bg-blue-500 active:shadow-sm active:translate-y-0"
        >
          <svg
            width="17"
            height="23"
            viewBox="0 0 23 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.65385 11.7V10.8H1.76923V11.7H2.65385ZM9.73077 11.7V10.8H8.84615V11.7H9.73077ZM9.73077 18.9H8.84615V19.8H9.73077V18.9ZM22.1154 6.3H23V5.9274L22.7417 5.6628L22.1154 6.3ZM16.8077 0.9L17.434 0.2628L17.1739 0H16.8077V0.9ZM2.65385 12.6H4.42308V10.8H2.65385V12.6ZM3.53846 19.8V15.3H1.76923V19.8H3.53846ZM3.53846 15.3V11.7H1.76923V15.3H3.53846ZM4.42308 14.4H2.65385V16.2H4.42308V14.4ZM5.30769 13.5C5.30769 13.7387 5.21449 13.9676 5.04859 14.1364C4.8827 14.3052 4.65769 14.4 4.42308 14.4V16.2C5.12692 16.2 5.80194 15.9155 6.29963 15.4092C6.79732 14.9028 7.07692 14.2161 7.07692 13.5H5.30769ZM4.42308 12.6C4.65769 12.6 4.8827 12.6948 5.04859 12.8636C5.21449 13.0324 5.30769 13.2613 5.30769 13.5H7.07692C7.07692 12.7839 6.79732 12.0972 6.29963 11.5908C5.80194 11.0845 5.12692 10.8 4.42308 10.8V12.6ZM8.84615 11.7V18.9H10.6154V11.7H8.84615ZM9.73077 19.8H11.5V18H9.73077V19.8ZM14.1538 17.1V13.5H12.3846V17.1H14.1538ZM11.5 10.8H9.73077V12.6H11.5V10.8ZM14.1538 13.5C14.1538 12.7839 13.8742 12.0972 13.3766 11.5908C12.8789 11.0845 12.2038 10.8 11.5 10.8V12.6C11.7346 12.6 11.9596 12.6948 12.1255 12.8636C12.2914 13.0324 12.3846 13.2613 12.3846 13.5H14.1538ZM11.5 19.8C12.2038 19.8 12.8789 19.5155 13.3766 19.0092C13.8742 18.5028 14.1538 17.8161 14.1538 17.1H12.3846C12.3846 17.3387 12.2914 17.5676 12.1255 17.7364C11.9596 17.9052 11.7346 18 11.5 18V19.8ZM15.9231 10.8V19.8H17.6923V10.8H15.9231ZM16.8077 12.6H21.2308V10.8H16.8077V12.6ZM16.8077 16.2H19.4615V14.4H16.8077V16.2ZM1.76923 9V2.7H0V9H1.76923ZM21.2308 6.3V9H23V6.3H21.2308ZM2.65385 1.8H16.8077V0H2.65385V1.8ZM16.1814 1.5372L21.4891 6.9372L22.7417 5.6628L17.434 0.2628L16.1814 1.5372ZM1.76923 2.7C1.76923 2.46131 1.86243 2.23239 2.02833 2.0636C2.19423 1.89482 2.41923 1.8 2.65385 1.8V0C1.95 0 1.27499 0.284463 0.777294 0.790812C0.279601 1.29716 0 1.98392 0 2.7H1.76923ZM0 21.6V24.3H1.76923V21.6H0ZM2.65385 27H20.3462V25.2H2.65385V27ZM23 24.3V21.6H21.2308V24.3H23ZM20.3462 27C21.05 27 21.725 26.7155 22.2227 26.2092C22.7204 25.7028 23 25.0161 23 24.3H21.2308C21.2308 24.5387 21.1376 24.7676 20.9717 24.9364C20.8058 25.1052 20.5808 25.2 20.3462 25.2V27ZM0 24.3C0 25.0161 0.279601 25.7028 0.777294 26.2092C1.27499 26.7155 1.95 27 2.65385 27V25.2C2.41923 25.2 2.19423 25.1052 2.02833 24.9364C1.86243 24.7676 1.76923 24.5387 1.76923 24.3H0Z"
              fill="white"
            />
          </svg>
          <>Descarcă</>
        </a>
        <a
          href={viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-blue-400 text-white rounded-xl text-sm py-2 px-4 my-2 lg:py-3 lg:px-6 lg:text-lg
             transition duration-300 ease-in-out
             hover:bg-blue-500 hover:shadow-md hover:-translate-y-0.5
             active:bg-blue-500 active:shadow-sm active:translate-y-0"
        >
          <svg
            width="27"
            height="21"
            viewBox="0 0 29 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.3844 9.16075C27.7948 9.73585 28 10.0247 28 10.45C28 10.8766 27.7948 11.1641 27.3844 11.7392C25.5403 14.3258 20.8302 19.9 14.5 19.9C8.1685 19.9 3.4597 14.3245 1.6156 11.7392C1.2052 11.1641 1 10.8752 1 10.45C1 10.0234 1.2052 9.73585 1.6156 9.16075C3.4597 6.57415 8.16985 1 14.5 1C20.8315 1 25.5403 6.5755 27.3844 9.16075Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5492 10.45C18.5492 9.37587 18.1225 8.34573 17.363 7.58621C16.6035 6.82669 15.5733 6.39999 14.4992 6.39999C13.4251 6.39999 12.395 6.82669 11.6354 7.58621C10.8759 8.34573 10.4492 9.37587 10.4492 10.45C10.4492 11.5241 10.8759 12.5543 11.6354 13.3138C12.395 14.0733 13.4251 14.5 14.4992 14.5C15.5733 14.5 16.6035 14.0733 17.363 13.3138C18.1225 12.5543 18.5492 11.5241 18.5492 10.45Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <>Vizualizează online</>
        </a>
      </div>
    </div>
  );
};

export default Document;
