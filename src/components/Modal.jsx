import { formatGender, formatStatus } from "../lib";

const Modal = ({ character, onClose, formatDate }) => (
  <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex items-center justify-center">
            <div className="sm:w-1/3 text-center mr-8 mt-8">
              <img src={character.image} alt={character.name} className="h-40 w-40 rounded-full mx-auto mb-4" />
            </div>
            <div className="sm:w-2/3 text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{character.name}</h3>
              <p className="text-sm text-gray-500">Género: {formatGender(character.gender)}</p>
              <p className="text-sm text-gray-500">Especie: {character.species}</p>
              <p className="text-sm text-gray-500">Origen: {character.origin.name}</p>
              <p className="text-sm text-gray-500">Estado: {formatStatus(character.status)}</p>
              <p className="text-sm text-gray-500">Creado: {formatDate(character.created)}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button onClick={onClose} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
