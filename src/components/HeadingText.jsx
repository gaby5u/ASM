
const HeadingText = ({title, description="", className=""}) => {
  return (
    <div className={`text-blue-500 text-center py-8 xl:py-16 ${className}`}>
      <h2 className="font-rubik font-semibold text-3xl lg:text-5xl">{title}</h2>
      {description!=="" && 
      <p className="font-dm mx-auto text-base w-full max-w-[920px] mt-4 md:mt-6 lg:text-2xl">
        {description}
      </p>
      }
    </div>
  );
};

export default HeadingText;
