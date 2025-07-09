import BlueButton from "../components/buttons/BlueButton";
import { useNavigate } from "react-router";

const Developing = () => {

  const navigate = useNavigate();

  return (
    <section className="bg-blue-100 font-dm text-blue-500 px-2 pt-16 pb-4 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
      <div className="flex flex-col-reverse items-center justify-between gap-2 my-8 md:flex-row">
        <div className="text-center md:text-start">
        <h1 className="font-rubik font-bold mt-2 text-3xl lg:text-5xl/13 lg:mt-6">
          Acest eveniment este în curs de dezvoltare
        </h1>
        <p className="my-10 text-base lg:text-2xl">Momentan acest eveniment este în proces de pregătire. Lucrăm la detalii și vom reveni în curând cu mai multe informații!</p>
        <BlueButton text="Înapoi" className="px-10" to={() => navigate(-1)}/>
        </div>
        <img src="/images/calendar.svg" alt="calendar" className="max-w-[260px] lg:max-w-[360px] xl:max-w-[575px]"/>
      </div>
    </section>
  );
};

export default Developing;
