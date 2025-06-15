import React from "react";

const Textarea = React.forwardRef(({ ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className="bg-blue-100 text-blue-400 placeholder-blue-400 border-1 border-blue-400 rounded-xl resize-none text-sm w-full h-[90px] py-2 px-3 my-1 transition-all duration-200 focus:ring-1 focus:ring-blue-400 focus:outline-none sm:py-4 sm:px-6 sm:my-3 md:h-[190px] lg:text-lg"
    ></textarea>
  );
});

export default Textarea;
