const Objective = ({ title }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex items-center justify-center shrink-0 w-[17px] h-[17px] border border-red-500 rounded-full">
        <div className="w-[7px] h-[7px] bg-red-500 rounded-full"></div>
      </div>
      <p className="py-2 text-sm lg:text-lg">{title}</p>
    </div>
  );
};

export default Objective;
