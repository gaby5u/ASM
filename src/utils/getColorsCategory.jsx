const getColorsCategory = (categoryName) => {
  if (!categoryName) return ["#ffffff", "#000000"];
  const normalizedCategory = categoryName.toLowerCase().trim();

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

    case "inițiative":
    case "initiative":
    case "inițiativă":
    case "initiativa":
      return ["#FFE89D", "#DD8800"];

    default:
      return ["#ffffff", "#000000"];
  }
};

export default getColorsCategory;
