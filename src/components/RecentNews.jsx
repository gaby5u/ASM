import { db } from "../config/firebase";
import { getDocs, collection, query, orderBy, limit } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import CardNews from "../components/cards/CardNews";
import Loading from "../components/Loading";
import Title from "../components/Title";
import BlueButton from "../components/buttons/BlueButton";

const RecentNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getRecentNews = async () => {
      try {
        const newsCollectionRef = collection(db, "news");

        const recentQuery = query(
          newsCollectionRef,
          orderBy("startDate", "desc"),
          limit(6)
        );

        const data = await getDocs(recentQuery);
        const filtereData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setNewsList(filtereData.filter((newsItem) => newsItem.isCompleted));
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getRecentNews();
  }, []);

  return (
    <>
      {isLoading && <Loading />}

      {newsList.length > 0 && (
        <>
          <Title subtitle="noutăți" title="Cele mai proaspete evenimente" />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full justify-items-center">
            {newsList.map((newsItem) => (
              <CardNews
                key={newsItem.id}
                newEl={newsItem}
                onClick={() => navigate(`/noutati/${newsItem.id}`)}
              />
            ))}
          </div>
          <div className="text-center">
            <BlueButton
              to="/noutati"
              text="Vezi toate noutățile"
              className="mt-8 md:mt-16"
            />
          </div>
        </>
      )}
    </>
  );
};

export default RecentNews;
