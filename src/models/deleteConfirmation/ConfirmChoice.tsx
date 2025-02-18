interface Choiceprops {
  confirmAction: () => void;
  cancelAction: () => void;
}

const ConfirmChoice: React.FC<Choiceprops> = ({
  confirmAction,
  cancelAction,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-[50rem]">
        <div className="text-center mb-6">
          <span className="text-lg font-semibold">
            Tem certeza que deseja excluir?
          </span>
          <div className="mt-2 text-sm text-gray-600">
            Essa ação é <strong>irreversível!</strong>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={confirmAction}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Sim
          </button>
          <button
            onClick={cancelAction}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmChoice;
