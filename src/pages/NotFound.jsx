import Title from "../components/Title";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Pagina nu a fost găsită | ASMoldova</title>
        <meta
          name="description"
          content="Ne pare rău, pagina căutată nu există. Verifică adresa sau întoarce-te pe pagina principală."
        />
      </Helmet>
      <div className="bg-blue-100 flex flex-col items-center justify-center py-[25vh]">
        <Title title="Error 404" customClassName="my-0" />
        <h2 className="font-rubik font-semibold text-xl text-blue-500 mt-4 lg:text-3xl">
          Această pagină nu exista
        </h2>
      </div>
    </>
  );
};

export default NotFound;
