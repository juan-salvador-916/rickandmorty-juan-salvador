import React, { useState, useEffect } from 'react';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';
import Modal from './components/Modal';
import { formatDate } from './lib';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${filterName !== '' ? `?name=${filterName}` : ''}`);
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const { results } = await response.json();
        setCharacters(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCharacters();
  }, [filterName]);


  const handleFilterChange = (event) => {
    setFilterName(event.target.value);
  };

  const handleViewDetail = async (character) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${character.id}`);
      if (!response.ok) {
        throw new Error('Error fetching character details');
      }
      const data = await response.json();
      setSelectedCharacter(data);
    } catch (error) {
      console.error('Error fetching character details:', error);
    }
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Lista de Personajes</h1>
      <input
        type="text"
        placeholder="Filtrar por nombre"
        value={filterName}
        onChange={handleFilterChange}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
      />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <TableHeader>Imagen</TableHeader>
            <TableHeader>Nombre</TableHeader>
            <TableHeader>Género</TableHeader>
            <TableHeader>Estado</TableHeader>
            <TableHeader>Acciones</TableHeader>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {characters.map((character, index) => (
            <TableRow key={index} character={character} formatDate={formatDate} onViewDetail={handleViewDetail} />
          ))}
        </tbody>
      </table>
      {selectedCharacter && (
        <Modal character={selectedCharacter} onClose={handleCloseModal} formatDate={formatDate} />
      )}
    </div>
  );
};

export default App;
