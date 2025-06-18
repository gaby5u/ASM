import Title from "../components/Title";

const NotFound = () => {
  return (
    <div className="bg-blue-100 flex flex-col items-center justify-center py-[25vh]">
      <Title title="404 Page" customClassName="my-0" />
      <h2 className="font-rubik font-semibold text-xl text-blue-500 mt-4 lg:text-3xl">Această pagină nu exista</h2>
    </div>
  );
};

export default NotFound;
