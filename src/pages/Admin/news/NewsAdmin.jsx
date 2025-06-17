import HeadingText from "../../../components/HeadingText";
import AddButton from "../../../components/buttons/AddButton";
import AdminElement from "../../../components/AdminElement";
import { db } from "../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../../../components/Loading";

const NewsAdmin = () => {
  const [newsList, setNewsList] = useState([]);
  const newsCollectionRef = collection(db, "news");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getNewsList = async () => {
      try {
        const data = await getDocs(newsCollectionRef);
        const filtereData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setNewsList(filtereData);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };
    getNewsList();
  }, []);

  return (
    <section className="bg-blue-100 font-dm px-2 pt-16 pb-4 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
      {isLoading && <Loading/>}
      <HeadingText title="Noutăți" className="text-start" />
      <AddButton
        title="o noutate nouă"
        onClick={() => navigate("/admin/noutati/adaugare")}
      />

      <div>
        {newsList.map((newsItem) => (
          <div key={newsItem.id}>
            <AdminElement
              title={newsItem.title}
              id={newsItem.id}
              collectionName="news"
              to="noutati"
              onDelete={() => {
                setNewsList((prev) =>
                  prev.filter((item) => item.id !== newsItem.id)
                );
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsAdmin;
