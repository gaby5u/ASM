
const CaractWhoAreWe = ({title, description}) => {
  return (
    <div className="flex items-start gap-4 relative text-blue-500">
      <div className="flex items-center justify-center shrink-0 w-[17px] h-[17px] border border-red-500 rounded-full mt-2 absolute left-[-9px]">
        <div className="w-[7px] h-[7px] bg-red-500 rounded-full"></div>
      </div>
      <div className="ml-8">
      <h3 className="font-bold text-base lg:text-2xl">{title}</h3>
      <p className="text-sm lg:text-lg">
        {description}
      </p>
      </div>
    </div>
  );
};

export default CaractWhoAreWe;
