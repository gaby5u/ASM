import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { format } from "date-fns";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

const AcquisitionDetails = () => {
  const { id } = useParams();
  const [acquisition, setAcquisition] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "acquisitions", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAcquisition(docSnap.data());
      }
    };
    fetchData();
  }, [id]);

  if (!acquisition) return <p>Loading...</p>;

  return (
    <section className="bg-blue-100 font-dm text-blue-500 px-2 pt-16 pb-4 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
      <div className="flex flex-wrap-reverse items-center justify-end gap-[10%] sm:flex-nowrap sm:justify-between">
        <Title
          title={acquisition.title}
          subtitle="Oportunitate de parteneriat"
        />
        <img
          src="/images/AcquisitionMegaphone.svg"
          alt="megaphone"
          className="w-[90px] sm:w-[126px] lg:w-[226px]"
        />
      </div>
      <p className="my-0 text-base lg:text-2xl">{acquisition.description}</p>
      <div className="w-full bg-white rounded-xl shadow-sm flex flex-wrap items-center justify-center gap-[10%] py-4 px-6 my-4 lg:py-6 lg:px-10 lg:mt-12 lg:my-8">
        <div className="flex my-2 gap-4 items-center">
          <svg
            width="18"
            height="19"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.16657C0 0.857173 0.123964 0.560453 0.344621 0.341679C0.565278 0.122906 0.864553 0 1.17661 0C1.48867 0 1.78794 0.122906 2.0086 0.341679C2.22925 0.560453 2.35322 0.857173 2.35322 1.16657V8.74458L17.1008 0.261311C18.3716 -0.468959 20 0.415298 20 1.88517V19.113C20 20.5829 18.3716 21.4695 17.1008 20.7392L2.35322 12.2559V19.8316C2.35322 20.141 2.22925 20.4377 2.0086 20.6565C1.78794 20.8753 1.48867 20.9982 1.17661 20.9982C0.864553 20.9982 0.565278 20.8753 0.344621 20.6565C0.123964 20.4377 0 20.141 0 19.8316V1.16657Z"
              fill="#4965AB"
            />
          </svg>
          <p className="text-sm lg:text-lg">
            {acquisition.startDate &&
              format(acquisition.startDate.toDate(), "dd.MM.yyyy")}
          </p>
        </div>
        <div className="flex my-2 gap-4 items-center">
          <svg
            width="18"
            height="22"
            viewBox="0 0 23 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.875V15H8.6685C9.1935 15 9.45775 15 9.6695 15.1312C9.8795 15.2607 9.9985 15.497 10.233 15.9678L11.017 17.5322C11.2515 18.0047 11.3687 18.2393 11.5805 18.3688C11.7922 18.5 12.0548 18.5 12.5815 18.5H21.125C21.538 18.5 21.7445 18.5 21.8723 18.3723C22 18.2445 22 18.038 22 17.625V5.375C22 4.962 22 4.7555 21.8723 4.62775C21.7445 4.5 21.538 4.5 21.125 4.5H12.5815C12.0565 4.5 11.7922 4.5 11.5805 4.36875C11.3705 4.23925 11.2515 4.003 11.017 3.53225L10.233 1.96775C9.9985 1.49525 9.88125 1.26075 9.6695 1.13125C9.45775 1 9.19525 1 8.6685 1H1.875C1.462 1 1.2555 1 1.12775 1.12775C1 1.2555 1 1.462 1 1.875Z"
              fill="#4965AB"
            />
            <path
              d="M1 15V1.875C1 1.462 1 1.2555 1.12775 1.12775C1.2555 1 1.462 1 1.875 1H8.6685C9.1935 1 9.45775 1 9.6695 1.13125C9.8795 1.26075 9.9985 1.497 10.233 1.96775L11.017 3.53225C11.2515 4.00475 11.3687 4.23925 11.5805 4.36875C11.7922 4.5 12.0548 4.5 12.5815 4.5H21.125C21.538 4.5 21.7445 4.5 21.8723 4.62775C22 4.7555 22 4.962 22 5.375V17.625C22 18.038 22 18.2445 21.8723 18.3723C21.7445 18.5 21.538 18.5 21.125 18.5H12.5815C12.0565 18.5 11.7922 18.5 11.5805 18.3688C11.3705 18.2393 11.2515 18.003 11.017 17.5322L10.233 15.9678C9.9985 15.4953 9.88125 15.2607 9.6695 15.1312C9.45775 15 9.19525 15 8.6685 15H1ZM1 15V25.5"
              stroke="#4965AB"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-sm lg:text-lg">
            {acquisition.finishDate &&
              format(acquisition.finishDate.toDate(), "dd.MM.yyyy")}
          </p>
        </div>
        <div className="flex my-2 gap-4 items-center">
          <svg
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.262 20.134C7.262 20.134 0 14.018 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 14.018 8.738 20.134 8.738 20.134C8.334 20.506 7.669 20.502 7.262 20.134ZM8 11.5C8.45963 11.5 8.91475 11.4095 9.33939 11.2336C9.76403 11.0577 10.1499 10.7999 10.4749 10.4749C10.7999 10.1499 11.0577 9.76403 11.2336 9.33939C11.4095 8.91475 11.5 8.45963 11.5 8C11.5 7.54037 11.4095 7.08525 11.2336 6.66061C11.0577 6.23597 10.7999 5.85013 10.4749 5.52513C10.1499 5.20012 9.76403 4.94231 9.33939 4.76642C8.91475 4.59053 8.45963 4.5 8 4.5C7.07174 4.5 6.1815 4.86875 5.52513 5.52513C4.86875 6.1815 4.5 7.07174 4.5 8C4.5 8.92826 4.86875 9.8185 5.52513 10.4749C6.1815 11.1313 7.07174 11.5 8 11.5Z"
              fill="#4965AB"
            />
          </svg>
          <p className="text-sm lg:text-lg">{acquisition.location}</p>
        </div>
      </div>

      <div className="shadow-sm bg-white rounded-xl flex flex-col justify-evenly gap-6 items-start py-8 px-6 my-4 md:flex-row lg:py-16 lg:px-10 lg:my-8">
        <UnorderedList
          title="Servicii solicitate"
          category={acquisition.services}
        />
        <UnorderedList
          title="Criterii de selecție"
          category={acquisition.selectionCriteria}
        />
      </div>

      <UnorderedList
        title="Oferta trebuie să includă"
        category={acquisition.offerElements}
      />
      <div className="mt-4 lg:mt-16">
      <h2 className="font-bold text-base mt-6 mb-2 line-clamp-3 lg:text-2xl">
        Trimiteți ofertele până la data de <span className="text-red-400">
        {acquisition.finishDate &&
          format(acquisition.finishDate.toDate(), "dd.MM.yyyy")}
        </span>
        ,la adresa de email: asmoldova.info@gmail.com
      </h2>
      <p className="text-sm lg:text-lg">Subiect email: „{acquisition.emailSubject}"</p>
      </div>
    </section>
  );
};

export default AcquisitionDetails;
