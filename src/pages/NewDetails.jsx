import { useParams } from "react-router";
import { useState, useEffect, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";
import BlueButton from "../components/buttons/BlueButton";
import NewsGallery from "../components/NewsGallery";

const NewDetails = () => {
  const { id } = useParams();
  const [newItem, setNewItem] = useState(null);
  const [isActual, setIsActual] = useState(false);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const docRef = doc(db, "news", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setNewItem(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchDate();
  }, []);

  useEffect(() => {
    const findIfActual = () => {
      const currentDate = Date.now();

      const finishTimestamp = newItem?.finishDate?.seconds
        ? newItem.finishDate.seconds * 1000
        : null;

      if (finishTimestamp) {
        setIsActual(currentDate <= finishTimestamp);
      } else setIsActual(false);
    };
    findIfActual();
  }, [newItem]);

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

  if (!newItem) return <p>Loading...</p>;

  return (
    <section className="bg-blue-100 font-dm text-blue-500 px-2 pt-16 pb-4 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
      <div className="flex flex-wrap items-center justify-between gap-[3%] md:flex-nowrap">
        <div className="w-full max-w-[840px]">
          <Title
            title={newItem?.title}
            subtitle="ce e nou?"
            customClassName="my-4 sm:my-8 md:mt-16 xl:my-16"
          />
          <div className="flex items-center justify-between gap-4">
            <div
              style={{ backgroundColor: bgColor }}
              className="w-fit rounded-full py-2 px-6"
            >
              <p
                style={{ color: textColor }}
                className="mx-2 lg:mx-4 text-sm ms:text-base"
              >
                {newItem.category}
              </p>
            </div>
            <div
              className={`${
                isActual ? "bg-[#199300]" : "bg-gray-200"
              } text-white py-2 px-4 rounded-xl lg:px-10`}
            >
              <p className="text-sm lg:text-lg">
                {isActual ? "Actual" : "Realizat"}
              </p>
            </div>
          </div>
          <p className="my-4 text-base lg:my-8 lg:text-2xl">
            {newItem?.description}
          </p>
        </div>
        <div className="mx-auto">
          <img
            className="rounded-xl w-[400px] max-h-[250px] sm:max-h-[300px] md:w-[500px] xl:w-[800px] xl:max-h-[484px] object-cover"
            src={newItem?.images[0]}
            alt={newItem?.title}
          />
        </div>
      </div>
      <div className="flex flex-col itesm-center justify-between my-4 md:flex-row md:gap-[5%]">
        <div className="shadow-sm w-full rounded-xl bg-white py-8 px-6 my-2 md:my-4 lg:py-16 lg:px-10 lg:my-8">
          <UnorderedList title="Obiective" category={newItem?.objection} />
        </div>
        <div className="shadow-sm w-full rounded-xl bg-white py-8 px-6 my-2 md:my-4 lg:py-16 lg:px-10 lg:my-8">
          <UnorderedList
            title="Activități principale"
            category={newItem?.mainActivities}
          />
        </div>
      </div>
      <div className="text-center mt-4 lg:mt-8">
        <BlueButton text="Participă acum!" />
      </div>
      <Title
        title="Povestea în fotografii"
        subtitle="galerie"
        customClassName="my-4 sm:my-8 md:mt-16 xl:my-16"
      />
      <NewsGallery images={newItem?.images}/>
    </section>
  );
};

export default NewDetails;
