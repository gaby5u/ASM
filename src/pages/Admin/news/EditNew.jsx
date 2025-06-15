import { useParams, useNavigate } from "react-router";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import NewsFormFields from "../../../components/forms/NewsFormFields";
import { db } from "../../../config/firebase";
import { format } from "date-fns";

const EditNew = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [defaultValues, setDefaultValues] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const docRef = doc(db, "news", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();

          const formatDate = (date) => {
            if (!date) return "";
            const d = date.toDate ? date.toDate() : new Date(date);
            return format(d, "yyyy-MM-dd");
          };

          setDefaultValues({
            ...data,
            startDate: formatDate(data.startDate),
            finishDate: formatDate(data.finishDate),
            objection: (data.objection || []).map((val) => ({
              value: val.value || val,
            })),
            mainActivities: (data.mainActivities || []).map((val) => ({
              value: val.value || val,
            })),
            images: data.images || [],
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  const onSubmitEdit = async (data) => {
    try {
      const docRef = doc(db, "news", id);
      await updateDoc(docRef, data);
      navigate("/admin/noutati");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center">Se încarcă...</p>;
  if (!defaultValues)
    return <p className="text-center text-red-500">Eroare la încărcare.</p>;

  return (
    <section className="bg-blue-100 font-dm px-2 pt-16 pb-4 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
      <NewsFormFields
        onSubmit={onSubmitEdit}
        defaultValues={defaultValues}
        isEdit
      />
    </section>
  );
};

export default EditNew;
