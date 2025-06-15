const AddButton = ({ title, onClick }) => {
  return (
    <button
      className="flex gap-2 items-center justify-center bg-blue-400 text-white rounded-xl text-sm py-2 px-4 my-2 lg:py-3 lg:px-6 lg:text-lg
             transition duration-300 ease-in-out
             hover:bg-blue-500 hover:shadow-md
             active:bg-blue-500 active:shadow-sm active:scale-95"
      onClick={onClick}
    >
      <svg
        className="w-[15px] lg:w-[20px]"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 10H19M10 1V19"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Adaugă {title}
    </button>
  );
};

export default AddButton;
