
import EditButton from "./buttons/EditButton";
import DeleteButton from "./buttons/DeleteButton";

const AdminElement = ({title, id, collectionName, onDelete}) => {
  return (
    <div className="w-full font-dm text-blue-500 rounded-xl shadow-sm bg-white flex items-center justify-between gap-2 px-4 py-4 my-4 lg:px-16 lg:py-8 lg:my-6">
      <p className="text-base lg:text-2xl">{title}</p>
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <EditButton id={id}/>
        <DeleteButton id={id} collectionName={collectionName} onDelete={onDelete}/>
      </div>
    </div>
  )
}

export default AdminElement