const Acquisition = ({ title, date, onClick }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl w-full max-w-[480px] py-4 px-6 xl:py-6 xl:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 13.5V3C14 2.17275 13.3023 1.5 12.4444 1.5H10.8889V0H9.33333V1.5H4.66667V0H3.11111V1.5H1.55556C0.697667 1.5 0 2.17275 0 3V13.5C0 14.3273 0.697667 15 1.55556 15H12.4444C13.3023 15 14 14.3273 14 13.5ZM4.66667 12H3.11111V10.5H4.66667V12ZM4.66667 9H3.11111V7.5H4.66667V9ZM7.77778 12H6.22222V10.5H7.77778V12ZM7.77778 9H6.22222V7.5H7.77778V9ZM10.8889 12H9.33333V10.5H10.8889V12ZM10.8889 9H9.33333V7.5H10.8889V9ZM12.4444 5.25H1.55556V3.75H12.4444V5.25Z"
              fill="#232A53"
            />
          </svg>
          <p className="text-sm lg:text-lg">Termen limită:</p>
        </div>
        <p className="bg-red-500 rounded-sm text-white text-sm py-1 px-3 lg:text-lg xl:px-5">{date}</p>
      </div>
      <h2 className="font-bold text-base mt-6 mb-2 line-clamp-3 lg:text-2xl">{title}</h2>
      <div className="w-full text-end">
        <button
          className="bg-blue-500 rounded-full rotate-[-45deg] transition-all duration-300 p-2
            hover:rotate-0 active:scale-95 active:bg-red-500 lg:p-3"
            onClick={onClick}
        >
          <svg
            className="w-[21px] h-[21px] lg:w-[26px] lg:h-[26px]"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.51229 13.0101C3.51313 13.5329 3.87545 13.9138 4.39788 13.9129L17.6266 13.8917L19.7659 13.8077L16.4763 16.8164L14.23 19.1103C14.0695 19.2713 13.9893 19.5122 13.9897 19.7432C13.9905 20.2455 14.3725 20.6169 14.8654 20.6161C15.1062 20.6157 15.3169 20.5245 15.5176 20.3335L22.1866 13.6538C22.3869 13.4623 22.4872 13.2312 22.4868 12.9804C22.4864 12.7392 22.3854 12.5083 22.1845 12.3175L15.4941 5.65881C15.2923 5.46842 15.0818 5.37833 14.8405 5.37871C14.3485 5.3795 13.9672 5.75169 13.968 6.24369C13.9684 6.48497 14.0494 6.7257 14.2103 6.88616L16.464 9.16254L19.7731 12.1709L17.6237 12.0938L4.39499 12.1151C3.87256 12.1159 3.51145 12.4876 3.51229 13.0101Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Acquisition;
