import { format } from "date-fns";

const CardNews = ({ newEl, onClick }) => {
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

      default:
        return ["#ffffff", "#000000"];
    }
  };

  const [bgColor, textColor] = getColorsCategory(newEl?.category);

  return (
    <div className="  rounded-xl bg-white shadow-sm max-w-[470px] h-full flex flex-col">
      <div className="relative">
        <img
          className="rounded-t-xl max-h-[250px] min-h-[250px] w-full h-full object-cover md:min-h-[300px]"
          src={newEl?.images[0]}
          alt={newEl?.title}
        />
        <p className="text-sm bg-red-500 text-white absolute top-6 right-6 rounded-sm py-1 px-4 lg:text-lg">
          {newEl?.startDate && format(newEl?.startDate.toDate(), "dd.MM.yyyy")}
        </p>
      </div>
      <div className="flex flex-col p-6 text-blue-500 flex-1">
        <div
          style={{ backgroundColor: bgColor }}
          className="w-fit rounded-full py-2 px-6"
        >
          <p style={{ color: textColor }} className="text-xs ms:text-sm">
            {newEl?.category}
          </p>
        </div>
        <h3 className="font-bold text-base my-2 line-clamp-2 lg:text-2xl">
          {newEl?.title}
        </h3>
        <p className="text-sm line-clamp-2 lg:text-lg">{newEl?.description}</p>
        <button
          onClick={onClick}
          className="group flex items-center gap-2 bg-none text-blue-400 text-sm pt-4 mt-auto lg:text-lg transition-all duration-300 hover:text-blue-500 relative"
        >
          <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">Află mai multe</span>
          <svg
            width="17"
            height="17"
            className="transition-transform duration-300 transform group-hover:translate-x-1"
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
  );
};

export default CardNews;
