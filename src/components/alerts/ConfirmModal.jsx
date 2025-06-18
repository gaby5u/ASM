const ConfirmModal = ({ isOpen, onConfirm, onCancel, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 font-dm text-blue-500 flex items-center justify-center bg-blue-100 bg-opacity-30">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
        <p className="text-lg font-medium text-gray-800">{message}</p>
        <div className="mt-6 flex justify-around">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-xl bg-gray-100 transition-all duration-200 hover:bg-gray-300 text-gray-800 font-semibold"
          >
            Anulează
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl bg-red-500 transition-all duration-200 hover:bg-[#D2221F] text-white font-semibold"
          >
            Șterge
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
