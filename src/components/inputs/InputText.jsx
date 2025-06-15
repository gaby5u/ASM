import React from "react";

const InputText = React.forwardRef(({...props}, ref) => {
  return (
    <input type="text" {...props} ref={ref}
    className="bg-blue-100 text-blue-400 placeholder-blue-400 border-1 w-full border-blue-400 rounded-xl text-sm py-2 px-3 my-1 transition-all duration-200 focus:ring-1 focus:ring-blue-400 focus:outline-none sm:my-3 sm:py-4 sm:px-6 lg:text-lg "
    />
  )

});

export default InputText