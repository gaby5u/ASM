import HeadingText from "../../components/HeadingText";
import BlueButton from "../../components/buttons/BlueButton";

const AdminHome = () => {
  return (
    <section className="bg-blue-100 px-2 pt-16 pb-0 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
      <HeadingText
        title="Bună, Admin!"
        description="Gestionează rapid toate proiectele, anunțurile și noutățile publicate de organizație"
      />
      <div className="bg-white flex items-center justify-center flex-wrap shadow-sm rounded-xl gap-4 w-full py-16 lg:py-30 lg:gap-16">
        <BlueButton text="Proiecte" to="/admin/proiecte" className="px-12" />
        <BlueButton text="Anunțuri" to="/admin/achizitii" className="px-12" />
        <BlueButton text="Noutăți" to="/admin/noutati" className="px-12" />
      </div>
    </section>
  );
};

export default AdminHome;
