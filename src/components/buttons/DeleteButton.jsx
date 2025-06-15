import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

const DeleteButton = ({ id, collectionName, onDelete }) => {
  const deleteElement = async () => {
    try {
      const toDeleteElement = doc(db, collectionName, id);
      const conf = confirm("Ești sigur că vrei să ștergi?");
      if (!conf) return;

      await deleteDoc(toDeleteElement);
      onDelete();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button
        onClick={() => deleteElement()}
        className="rounded-xl text-white bg-red-500 text-sm w-full transition-all duration-200 py-2 px-4 hover:bg-[#D2221F] active:scale-95 active:bg-[#D2221F] lg:text-lg lg:px-8"
      >
        Șterge
      </button>
    </div>
  );
};

export default DeleteButton;
