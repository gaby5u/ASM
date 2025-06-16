import { db } from "../config/firebase";
import { getDocs, collection, query, orderBy, limit } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import CardNews from "../components/cards/CardNews";

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
        setNewsList(filtereData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getRecentNews();
  }, []);

  useEffect(() => {}, [newsList]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full justify-items-center">
        {
          newsList.map((newsItem) => (
            <CardNews newEl={newsItem} onClick={() => navigate(`/noutati/${newsItem.id}`)}/>
          ))
        }
      </div>
    </>
  );
};

export default RecentNews;
