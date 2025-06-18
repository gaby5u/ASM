import { useEffect } from "react";

const CustomNotification = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";

  return (
    <div
      className={`fixed top-10 right-5 font-dm z-100 px-6 py-3 rounded-lg shadow-md ${bgColor} transition-opacity duration-300`}
    >
      {message}
    </div>
  );
};

export default CustomNotification;