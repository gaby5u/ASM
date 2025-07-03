import { useParams, useNavigate } from "react-router";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { format } from "date-fns";
import Loading from "../../../components/Loading";
import ErrorModal from "../../../components/alerts/ErrorModal";
import DocumentsFormFields from "../../../components/forms/DocumentsFormFields";

const EditDocument = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [defaultValues, setDefaultValues] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const docRef = doc(db, "documents", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();

          setDefaultValues({
            ...data
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [id]);

  const onSubmitEdit = async (data) => {
    try {
      const docRef = doc(db, "documents", id);
      await updateDoc(docRef, data);
      navigate("/admin/documente");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <Loading />;
  if (!defaultValues) return <ErrorModal />;
  return (
    <section className="bg-blue-100 font-dm px-2 pt-16 pb-4 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
      <DocumentsFormFields
        onSubmit={onSubmitEdit}
        defaultValues={defaultValues}
        isEdit
      />
    </section>
  );
};

export default EditDocument;
