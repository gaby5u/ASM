import HeadingText from "../../../components/HeadingText";
import AddButton from "../../../components/buttons/AddButton";
import AdminElement from "../../../components/AdminElement";
import { db } from "../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../../../components/Loading";

const DocumentsAdmin = () => {
  const [documentsList, setDocumentsList] = useState([]);
  const documentsCollectionRef = collection(db, "documents");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getDocumentsList = async () => {
      try {
        const data = await getDocs(documentsCollectionRef);
        const filtereData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setDocumentsList(filtereData);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getDocumentsList();
  }, []);
  return (
    <section className="bg-blue-100 font-dm px-2 pt-16 pb-4 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
      {isLoading && <Loading />}
      <div className="max-w-[1880px] mx-auto">
        <HeadingText title="Documente" className="text-start" />
        <AddButton
          title="un document nou"
          onClick={() => navigate("/admin/documente/adaugare")}
        />

        <div>
          {documentsList.map((documentItem) => (
            <div key={documentItem.id}>
              <AdminElement
                title={documentItem.title}
                id={documentItem.id}
                collectionName="documents"
                to="documente"
                onDelete={() => {
                  setDocumentsList((prev) =>
                    prev.filter((item) => item.id !== documentItem.id)
                  );
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsAdmin;
