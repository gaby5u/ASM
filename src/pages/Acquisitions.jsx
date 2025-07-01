import HeadingText from "../components/HeadingText";
import Acquisition from "../components/cards/Acquisition";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";

const Acquisitions = () => {

    const [acquisitionsList, setAcquisitionsList] = useState([]);
    const acquisitionsCollectionRef = collection(db, "acquisitions");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
  
    useEffect(() => {
      const getAcquisitionsList = async () => {
        try {
          const data = await getDocs(acquisitionsCollectionRef);
          const filteredData = data.docs.map((doc) => {
          const docData = doc.data();
          const finishDateObj = docData.finishDate?.seconds
            ? new Date(docData.finishDate.seconds * 1000)
            : null;

          return {
            ...docData,
            id: doc.id,
            finishDateFormatted: finishDateObj
              ? format(finishDateObj, "dd.MM.yyyy")
              : "N/A",
          };
        });
          setAcquisitionsList(filteredData);
          setIsLoading(false);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      getAcquisitionsList();
    }, []);

  return (
    <section className="bg-blue-100 font-dm text-blue-500 px-2 pt-16 pb-0 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
      {isLoading && <Loading/>}
      <div className="max-w-[1880px] mx-auto">
      <HeadingText
        title="Achiziții"
        description="Cele mai recente anunțuri legate de colaborări, sponsorizări și achiziții pentru inițiativele noastre viitoare"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
        {acquisitionsList.map((acquisition) => (
          <Acquisition
            title={acquisition.title}
            date={acquisition.finishDateFormatted}
            key={acquisition.id}
            onClick={() => navigate(`/achizitii/${acquisition.id}`)}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Acquisitions;
