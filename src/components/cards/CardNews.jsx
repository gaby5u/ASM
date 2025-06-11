const CardNews = ({ date, category, title, description, img, alt }) => {

  const getColorsCategory = (category) => {
    const normalizedCategory = category.toLowerCase()?.trim();

    switch (normalizedCategory) {
      case "evenimente":
      case "eveniment":
        return ["#DCFCE7", "#30784B"];

      case "admitere": 
        return ["#F5F8FF", "#4965AB"];

      case "cercetari":
      case "cercetare":
      case "cercetări":
        return ["#F3E8FF", "#7D3BB3"];

      case "intaliniri":
      case "întâlniri":
      case "intalnire":
      case "întalnire":
        return ["#E6FDFF", "#40AAAE"];

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

      default: return ["#ffffff", "#000000"];
    }
  }

  const [bgColor, textColor] = getColorsCategory(category);

  return (
    <div className="cursor-pointer rounded-xl bg-white shadow-sm max-w-[470px]">
      <div>
        <div className="relative">
          <img className="rounded-t-xl max-h-[250px] w-full object-cover md:max-h-[300px]" src={img} alt={alt} />
          <p className="text-sm bg-red-500 text-white absolute top-6 right-6 rounded-sm py-1 px-4 lg:text-lg">{date}</p>
        </div>
        <div className="p-6 text-blue-500">
        <div style={{ backgroundColor: bgColor }} className=" rounded-full inline-block py-2 px-6">
          <p style={{ color: textColor }} className="text-xs mdtext-sm">{category}</p>
        </div>
        <h3 className="font-bold text-base my-2 line-clamp-2 lg:text-2xl">{title}</h3>
        <p className="text-sm line-clamp-2 lg:text-lg">{description}</p>
        <button className="flex items-center justify-center gap-2 bg-none text-blue-400 text-sm lg:text-lg">
          Află mai multe
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.77983 8.4964C1.77983 8.86676 2.03605 9.13694 2.4061 9.13694L11.7764 9.13694L13.2919 9.07987L10.9583 11.2073L9.36456 12.8296C9.25072 12.9434 9.19365 13.114 9.19365 13.2777C9.19365 13.6334 9.46383 13.8969 9.81294 13.8969C9.98355 13.8969 10.1329 13.8326 10.2753 13.6975L15.0067 8.97362C15.1488 8.83822 15.2202 8.6746 15.2202 8.49701C15.2202 8.3261 15.1488 8.16247 15.0067 8.02708L10.2753 3.3029C10.1326 3.16781 9.98355 3.10376 9.81264 3.10376C9.46414 3.10376 9.19365 3.36696 9.19365 3.71546C9.19365 3.88637 9.25072 4.05697 9.36456 4.17081L10.9583 5.78581L13.2989 7.92053L11.7764 7.86346L2.4061 7.86346C2.03605 7.86346 1.77983 8.12635 1.77983 8.4964Z"
              fill="#4965AB"
            />
          </svg>
        </button>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
