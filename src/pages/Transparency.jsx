import HeadingText from "../components/HeadingText";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import DocumentsCategory from "../components/DocumentsCategory";

const Transparency = () => {
  const [documentsList, setDocumentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setIsLoading(true);
        const documentsCol = collection(db, "documents");
        const documentsSnapshot = await getDocs(documentsCol);
        const documentsData = documentsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDocumentsList(documentsData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocuments();
  }, []);

    const politicsList = documentsList?.filter(doc => doc.category === 'Politici');
    const administrativeList = documentsList?.filter(doc => doc.category === 'Documente legale și administrative');
    const plansList = documentsList?.filter(doc => doc.category === 'Planuri strategice și de activitate');
    const reportsList = documentsList?.filter(doc => doc.category === 'Rapoarte');
    const decisionsList = documentsList?.filter(doc => doc.category === 'Decizii și hotărâri');
    const verbalProcessesList = documentsList?.filter(doc => doc.category === 'Procese verbale');
    const questionnairesList = documentsList?.filter(doc => doc.category === 'Chestionare și analize sociologice');
    const agreementList = documentsList?.filter(doc => doc.category === 'Contracte si acorduri');

  return (
    <>
      <section className="blured-section bg-blue-100 text-blue-500 px-2 pt-16 pb-0 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
        {isLoading && <Loading />}
        <div className="max-w-[1880px] mx-auto">
          <HeadingText
            title="Transparență"
            description="Documente legale, administrative și politici interne care reflectă angajamentul nostru față de transparență și responsabilitate"
          />
          <DocumentsCategory title="Politici" list={politicsList}/>
          <DocumentsCategory title="Documente legale și administrative" list={administrativeList}/>
          <DocumentsCategory title="Planuri strategice și de activitate" list={plansList}/>
          <DocumentsCategory title="Rapoarte" list={reportsList}/>
          <DocumentsCategory title="Decizii și hotărâri" list={decisionsList}/>
          <DocumentsCategory title="Procese verbale" list={verbalProcessesList}/>
          <DocumentsCategory title="Chestionare și analize sociologice" list={questionnairesList}/>
          <DocumentsCategory title="Contracte si acorduri" list={agreementList}/>

        </div>
      </section>
    </>
  );
};

export default Transparency;
