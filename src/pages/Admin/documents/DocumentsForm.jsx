import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useNavigate } from "react-router";
import DocumentsFormFields from "../../../components/forms/DocumentsFormFields";

const DocumentsForm = () => {
  const navigate = useNavigate();
  const documentsCollectionRef = collection(db, "documents");

  const defaultValues = {
    title: "",
    category: "",
    viewUrl: "",
    downloadUrl: "",
  };

  const onSubmitNew = async (data) => {
    try {

      await addDoc(documentsCollectionRef, data);
      navigate("/admin/documente");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DocumentsFormFields
      onSubmit={onSubmitNew}
      defaultValues={defaultValues}
    />
  );
};

export default DocumentsForm;
