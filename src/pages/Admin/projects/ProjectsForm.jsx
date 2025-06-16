import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useNavigate } from "react-router";
import ProjectsFormFields from "../../../components/forms/ProjectsFormFields";

const ProjectsForm = () => {
  const navigate = useNavigate();
  const newsCollectionRef = collection(db, "projects");

  const defaultValues = {
    title: "",
    date: "",
    description: "",
    objection: [{ value: "" }],
    mainActivities: [{ value: "" }],
    details: "",
    image: "",
  };

  const onSubmitNew = async (data) => {
    try {
      const formattedData = {
        ...data,
        date: new Date(data.date),
      };

      await addDoc(newsCollectionRef, formattedData);
      navigate("/admin/proiecte");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <ProjectsFormFields onSubmit={onSubmitNew} defaultValues={defaultValues} />
  );
};

export default ProjectsForm;
