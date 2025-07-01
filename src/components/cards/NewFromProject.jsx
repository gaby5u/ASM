import getColorsCategory from "../../utils/getColorsCategory";

const NewFromProject = ({ newItem, onClick }) => {

  const [bgColor, textColor] = getColorsCategory(newItem?.category);

  return (
    <div onClick={onClick} className="bg-white shadow-sm rounded-xl w-full cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-blue-400 hover:shadow-md">
      <img src={newItem.images[0]} alt={newItem.title} className="w-full object-cover rounded-t-xl max-h-[200px] lg:max-h-[250px]"/>
      <div className="p-5">
      <div style={{ backgroundColor: bgColor }} className="w-fit rounded-full py-2 px-6">
        <p style={{ color: textColor }} className="text-xs ms:text-sm">{newItem.category}</p>
      </div>
      <p className="font-bold text-sm line-clamp-2 my-4 lg:my-4 lg:text-lg">{newItem.title}</p>
      </div>
    </div>
  );
};

export default NewFromProject;
