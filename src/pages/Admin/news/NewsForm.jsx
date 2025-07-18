import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useNavigate } from "react-router";
import NewsFormFields from "../../../components/forms/NewsFormFields";
import { format } from "date-fns";

const NewsForm = () => {
  const navigate = useNavigate();
  const newsCollectionRef = collection(db, "news");

  const defaultValues = {
    title: "",
    isCompleted: false,
    startDate: "",
    finishDate: "",
    category: "",
    associatedProject: "",
    description: "",
    objection: [{ value: "" }],
    mainActivities: [{ value: "" }],
    details: "",
    images: [],
  };

  const onSubmitNew = async (data) => {
    try {
      const formattedData = {
        ...data,
        startDate: new Date(data.startDate),
        finishDate: new Date(data.finishDate),
      };

      await addDoc(newsCollectionRef, formattedData);
      navigate("/admin/noutati");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <NewsFormFields onSubmit={onSubmitNew} defaultValues={defaultValues} />
  );
};

export default NewsForm;
