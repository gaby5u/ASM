import { useParams, useNavigate } from "react-router";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";
import NewFromProject from "../components/cards/NewFromProject";
import Loading from "../components/Loading";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projects, setProjects] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "projects", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProjects(docSnap.data());
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const getNews = async () => {
      if (!projects?.title) return;

      try {
        const newsCollection = collection(db, "news");
        const associatedNews = query(
          newsCollection,
          where("associatedProject", "==", projects?.title)
        );
        const querySnapshot = await getDocs(associatedNews);

        const filteredData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setNewsList(filteredData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getNews();
  }, [projects]);

  if (!projects) return <Loading/>;

  return (
    <section className="bg-blue-100 font-dm text-blue-500 px-2 pt-16 pb-4 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
      <div className="flex flex-wrap-reverse items-center justify-end gap-[10%] sm:flex-nowrap sm:justify-between">
        <Title title={projects.title} subtitle="inițiativele noastre" />
        <img
          src="/images/project.svg"
          alt="megaphone"
          className="w-[90px] sm:w-[126px] lg:w-[226px]"
        />
      </div>
      <div className="flex my-2 gap-4 items-center">
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26 21.9373V4.87494C26 3.53068 24.7043 2.43747 23.1111 2.43747H20.2222V0H17.3333V2.43747H8.66667V0H5.77778V2.43747H2.88889C1.29567 2.43747 0 3.53068 0 4.87494V21.9373C0 23.2815 1.29567 24.3747 2.88889 24.3747H23.1111C24.7043 24.3747 26 23.2815 26 21.9373ZM8.66667 19.4998H5.77778V17.0623H8.66667V19.4998ZM8.66667 14.6248H5.77778V12.1874H8.66667V14.6248ZM14.4444 19.4998H11.5556V17.0623H14.4444V19.4998ZM14.4444 14.6248H11.5556V12.1874H14.4444V14.6248ZM20.2222 19.4998H17.3333V17.0623H20.2222V19.4998ZM20.2222 14.6248H17.3333V12.1874H20.2222V14.6248ZM23.1111 8.53115H2.88889V6.09368H23.1111V8.53115Z"
            fill="#4965AB"
          />
        </svg>
        <p className="text-sm lg:text-lg">
          {projects.date && format(projects.date.toDate(), "dd.MM.yyyy")}
        </p>
      </div>
      <p className="my-8 text-base lg:text-2xl">{projects.description}</p>
      <h2 className="font-rubik font-bold text-xl lg:text-[32px]">Detalii</h2>
      <p className="my-4 text-base lg:text-2xl">{projects.details}</p>
      <div className="flex flex-col itesm-center justify-between md:flex-row md:gap-[5%]">
        <div className="shadow-sm w-full rounded-xl bg-white py-8 px-6 my-2 md:my-4 lg:py-16 lg:px-10 lg:my-8">
          <UnorderedList title="Obiective" category={projects.objection} />
        </div>
        <div className="shadow-sm w-full rounded-xl bg-white py-8 px-6 my-2 md:my-4 lg:py-16 lg:px-10 lg:my-8">
          <UnorderedList
            title="Activități principale"
            category={projects.mainActivities}
          />
        </div>
      </div>
      {newsList.length > 0 && (
        <>
          <h2 className="font-rubik my-4 font-bold text-xl lg:text-[32px]">
            Activitățile din cadrul proiectului
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-4 lg:mt-10">
            {newsList?.map((newItem) => (
              <NewFromProject
                newItem={newItem}
                onClick={() => navigate(`/noutati/${newItem.id}`)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectDetails;
