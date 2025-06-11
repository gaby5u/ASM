import HeadingText from "../components/HeadingText";
import Acquisition from "../components/cards/Acquisition";

const Acquisitions = () => {
  return (
    <section className="bg-blue-100 font-dm text-blue-500 px-2 pt-16 pb-0 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
      <HeadingText
        title="Achiziții"
        description="Cele mai recente anunțuri legate de colaborări, sponsorizări și achiziții pentru inițiativele noastre viitoare"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
        <Acquisition
          title="Apel de oferte pentru servicii de cazare, alimentare și logistică pentru conferință"
          date="30.06.2025"
        />
        <Acquisition
          title="Apel de oferte pentru servicii de cazare, alimentare și logistică pentru conferință ervicii de cazare, alimentare și logistică pentru conferință"
          date="30.06.2025"
        />
        <Acquisition
          title="Apel de oferte pentru servicii de cazare, alimentare și logistică pentru conferință"
          date="30.06.2025"
        />
        <Acquisition
          title="Apel de oferte pentru servicii de cazare, alimentare și logistică pentru conferință"
          date="30.06.2025"
        />
        <Acquisition
          title="Apel de oferte pentru servicii de cazare, alimentare și logistică pentru conferință"
          date="30.06.2025"
        />
        <Acquisition
          title="Apel de oferte pentru servicii de cazare, alimentare și logistică pentru conferință"
          date="30.06.2025"
        />
        <Acquisition
          title="Apel de oferte pentru servicii de cazare, alimentare și logistică pentru conferință"
          date="30.06.2025"
        />
      </div>
    </section>
  );
};

export default Acquisitions;
