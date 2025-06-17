const NewFromProject = ({ newItem, onClick }) => {
  const getColorsCategory = (categoryName) => {
    if (!categoryName) return ["#ffffff", "#000000"];
    const normalizedCategory = categoryName.toLowerCase()?.trim();

    switch (normalizedCategory) {
      case "evenimente":
      case "eveniment":
        return ["#BDFFD4", "#30784B"];

      case "admitere":
        return ["#C5D7FF", "#4965AB"];

      case "cercetari":
      case "cercetare":
      case "cercetări":
        return ["#F3E8FF", "#7D3BB3"];

      case "intaliniri":
      case "întâlniri":
      case "intalnire":
      case "întalnire":
        return ["#B8FAFF", "#40AAAE"];

      case "advocacy":
        return ["#FFDFDF", "#B25E5E"];

      case "proiecte":
      case "proiect":
        return ["#FFEDD5", "#A54827"];

      case "anunturi":
      case "anunțuri":
      case "anunt":
      case "anunț":
        return ["#FFD8F7", "#B32C96"];

      case "colaborari":
      case "colaborări":
      case "colaborare":
        return ["#F4FFD5", "#8DAC47"];

      default:
        return ["#ffffff", "#000000"];
    }
  };

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
