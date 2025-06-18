import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import ConfirmModal from "../../components/alerts/ConfirmModal";
import { useState } from "react";

const DeleteButton = ({ id, collectionName, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteElement = async () => {
    try {
      const toDeleteElement = doc(db, collectionName, id);
      await deleteDoc(toDeleteElement);
      setShowConfirm(false);
      onDelete();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowConfirm(true)}
        className="rounded-xl text-white bg-red-500 text-sm w-full transition-all duration-200 py-2 px-4 hover:bg-[#D2221F] active:scale-95 active:bg-[#D2221F] lg:text-lg lg:px-8"
      >
        Șterge
      </button>

      <ConfirmModal
        isOpen={showConfirm}
        message="Ești sigur că vrei să ștergi?"
        onCancel={() => setShowConfirm(false)}
        onConfirm={deleteElement}
      />
    </div>
  );
};

export default DeleteButton;
