import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useNavigate } from "react-router";
import AcquisitionsFormFields from "../../../components/forms/AcquisitionsFormFields";
import { format } from "date-fns";

const AcquisitionsForm = () => {
  const navigate = useNavigate();
  const acquisitionsCollectionRef = collection(db, "acquisitions");

  const defaultValues = {
    title: "",
    description: "",
    startDate: "",
    finishDate: "",
    location: "",
    services: [{ value: "" }],
    selectionCriteria: [{ value: "" }],
    offerElements: [{ value: "" }],
    emailSubject: "",
  };

  const onSubmitNew = async (data) => {
    try {
      const formattedData = {
        ...data,
        startDate: new Date(data.startDate),
        finishDate: new Date(data.finishDate),
      };

      await addDoc(acquisitionsCollectionRef, formattedData);
      navigate("/admin/achizitii");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <AcquisitionsFormFields onSubmit={onSubmitNew} defaultValues={defaultValues} />
  )
}

export default AcquisitionsForm