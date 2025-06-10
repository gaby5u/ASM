
const StateCard = ({ svg, title, number}) => {
  return (
    <div className="text-center ">
      <div className="mx-auto bg-blue-100 p-4 rounded-full flex items-center justify-center w-[50px] h-[50px] md:w-[70px] md:h-[70px] md:p-6 lg:w-[86px] lg:h-[86px]">
        {svg}
      </div>
      <h3 className="text-3xl my-6 font-bold lg:text-5xl">{number}</h3>
      <p className="text-sm lg:text-lg">{title}</p>
    </div>
  );
};

export default StateCard;
