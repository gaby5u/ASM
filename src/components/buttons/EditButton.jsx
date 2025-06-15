import { Link } from "react-router";

const EditButton = ({ id }) => {
  return (
    <Link to={`/admin/noutati/editare/${id}`} className="rounded-xl text-white bg-[#EA8900] text-sm transition-all duration-200 py-2 px-4 hover:bg-[#FFA425] active:scale-95 active:bg-[#FFA425] lg:text-lg lg:px-8">
      Editează
    </Link>
  );
};

export default EditButton;
