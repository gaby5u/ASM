import HeadingText from "../components/HeadingText";
import { db } from "../config/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import CardNews from "../components/cards/CardNews";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Toate");
  const categories = ["Toate", "Evenimente", "Cercetări", "Admitere", "Advocacy", "Întâlniri", "Colaborări", "Inițiative"];
  const navigate = useNavigate();

  useEffect(() => {
    const getNewsist = async () => {
      setIsLoading(true);
      try {
        let newsQuery;
        const newsCollectionRef = collection(db, "news");

        if (activeCategory === "Toate") {
          newsQuery = newsCollectionRef;
        } else {
          newsQuery = query(
            newsCollectionRef,
            where("category", "==", activeCategory)
          );
        }

        const data = await getDocs(newsQuery);
        const filteredData = data.docs.map((doc) => {
          const docData = doc.data();
          const finishDateObj = docData.finishDate?.seconds
            ? new Date(docData.finishDate.seconds * 1000)
            : null;
          const startDateObj = docData.startDate?.seconds
            ? new Date(docData.startDate.seconds * 1000)
            : null;

          return {
            ...docData,
            id: doc.id,
            finishDateFormatted: finishDateObj
              ? format(finishDateObj, "dd.MM.yyyy")
              : "N/A",
            startDateFormatted: startDateObj
              ? format(startDateObj, "dd.MM.yyyy")
              : "N/A",
          };
        });
        setNewsList(filteredData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getNewsist();
  }, [activeCategory]);
  return (
    <section className="bg-blue-100 font-dm text-blue-500 px-2 pt-16 pb-0 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
      {isLoading && <Loading/>}
      <div className="max-w-[1880px] mx-auto">
      <HeadingText
        title="Noutăți"
        description="Cele mai recente inițiative, evenimente și acțiuni ale ASM, direct din teren"
      />
      <div className="flex flex-wrap items-center justify-center bg-white shadow-sm rounded-xl mb-4 p-2 md:px-4 lg:flex-nowrap lg:justify-between lg:px-8 lg:py-4 lg:mb-16">
        {categories.map((category, index) => (
          <p key={index} onClick={() => setActiveCategory(category)} className={`my-2 text-base rounded-sm cursor-pointer transition-all duration-200 py-2 px-4 lg:my-4 lg:text-xl ${activeCategory === category ? "bg-blue-400 font-bold text-white hover:bg-blue-400" : "hover:bg-gray-100"}`}>
            {category}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {newsList.map((newEl) => (
          <CardNews key={newEl.id} newEl={newEl} onClick={() => navigate(`/noutati/${newEl.id}`)}/>
        ))}
      </div>
      </div>
    </section>
  );
};

export default News;
