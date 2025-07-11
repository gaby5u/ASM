import HeadingText from "../../../components/HeadingText";
import AddButton from "../../../components/buttons/AddButton";
import AdminElement from "../../../components/AdminElement";
import { db } from "../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../../../components/Loading";
import { Helmet } from "react-helmet";

const AcquisitionsAdmin = () => {
  const [acquisitionsList, setAcquisitionsList] = useState([]);
  const acquisitionsCollectionRef = collection(db, "acquisitions");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getAcquisitionsList = async () => {
      try {
        const data = await getDocs(acquisitionsCollectionRef);
        const filtereData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAcquisitionsList(filtereData);
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
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="bg-blue-100 font-dm px-2 pt-16 pb-4 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
        {isLoading && <Loading />}
        <div className="max-w-[1880px] mx-auto">
          <HeadingText title="Anunțuri" className="text-start" />
          <AddButton
            title="un anunț nou"
            onClick={() => navigate("/admin/achizitii/adaugare")}
          />

          <div>
            {acquisitionsList.map((acquisitionItem) => (
              <div key={acquisitionItem.id}>
                <AdminElement
                  title={acquisitionItem.title}
                  id={acquisitionItem.id}
                  collectionName="acquisitions"
                  to="achizitii"
                  onDelete={() => {
                    setAcquisitionsList((prev) =>
                      prev.filter((item) => item.id !== acquisitionItem.id)
                    );
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AcquisitionsAdmin;
