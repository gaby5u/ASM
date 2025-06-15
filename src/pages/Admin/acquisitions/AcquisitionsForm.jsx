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
    finalDate: "",
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
        startDate: format(new Date(data.startDate), "MM/dd/yyyy"),
        finishDate: format(new Date(data.finishDate), "MM/dd/yyyy"),
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