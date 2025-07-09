import getColorsCategory from "../../utils/getColorsCategory";
import { useNavigate } from "react-router";

const DevelopingNews = ({ newEl, isFromProject=false }) => {
  const [bgColor, textColor] = getColorsCategory(newEl?.category);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/dezvoltare")}
      className={`bg-white shadow-sm rounded-xl w-full cursor-pointer ${isFromProject ? "transition-all duration-300 hover:ring-2 hover:ring-blue-400 hover:shadow-md" : "max-w-[470px]"}`}
    >
      <div className={`bg-[#D4D4D4] rounded-t-xl flex items-center justify-center w-full ${isFromProject ? "min-h-[200px] lg:min-h-[250px]" : "min-h-[250px] md:min-h-[300px]"}`}>
      <img
        src="/images/hourglass.svg"
        alt="hourglass"
        className="w-full rounded-t-xl max-h-[130px] lg:max-h-[144px]"
      />
      </div>
      <div className="p-5">
        <div
          style={{ backgroundColor: bgColor }}
          className="w-fit rounded-full py-2 px-6"
        >
          <p style={{ color: textColor }} className="text-xs ms:text-sm">
            {newEl.category}
          </p>
        </div>
        <p className="font-bold text-sm line-clamp-2 my-4 lg:my-4 lg:text-lg">
          {newEl.title}
        </p>
      </div>
    </div>
  );
};

    // <div onClick={onClick} className="bg-white shadow-sm rounded-xl w-full cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-blue-400 hover:shadow-md">
    //   <img src={newItem.images[0]} alt={newItem.title} className="w-full object-cover rounded-t-xl max-h-[200px] lg:max-h-[250px]"/>
    //   <div className="p-5">
    //   <div style={{ backgroundColor: bgColor }} className="w-fit rounded-full py-2 px-6">
    //     <p style={{ color: textColor }} className="text-xs ms:text-sm">{newItem.category}</p>
    //   </div>
    //   <p className="font-bold text-sm line-clamp-2 my-4 lg:my-4 lg:text-lg">{newItem.title}</p>
    //   </div>
    // </div>

export default DevelopingNews;
