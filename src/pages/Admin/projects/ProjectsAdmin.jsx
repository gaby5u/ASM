import HeadingText from "../../../components/HeadingText";
import AddButton from "../../../components/buttons/AddButton";
import AdminElement from "../../../components/AdminElement";
import { db } from "../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../../../components/Loading";

const ProjectsAdmin = () => {
  const [projectsList, setProjectsList] = useState([]);
  const projectsCollectionRef = collection(db, "projects");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getProjectsList = async () => {
      try {
        const data = await getDocs(projectsCollectionRef);
        const filtereData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProjectsList(filtereData);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);  
      }
    };
    getProjectsList();
  }, []);

  return (
    <section className="bg-blue-100 font-dm px-2 pt-16 pb-4 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
      <div className="max-w-[1880px] mx-auto">
      <HeadingText title="Proiecte" className="text-start" />
      <AddButton
        title="un proiect nou"
        onClick={() => navigate("/admin/proiecte/adaugare")}
      />

      <div>
        {projectsList.map((projectsItem) => (
          <div key={projectsItem.id}>
            <AdminElement
              title={projectsItem.title}
              id={projectsItem.id}
              collectionName="projects"
              to="proiecte"
              onDelete={() => {
                setProjectsList((prev) =>
                  prev.filter((item) => item.id !== projectsItem.id)
                );
              }}
            />
          </div>
        ))}
      </div>
      </div>
      {isLoading && <Loading/>}
    </section>
  );
};

export default ProjectsAdmin;
