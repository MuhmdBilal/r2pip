import React, { useState } from 'react';
import VoteModal from './VoteModal'; 

const VoteTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  // Dummy data for the table
  const dummyCurrencies = [
    {
      _id: '1',
      currency1: 'GUAP',
      currency2: 'R2PIP',
      username: 'John Doe',
      status: 'Approved',
    },
    {
      _id: '2',
      currency1: 'GUAP',
      currency2: 'R2PIP',
      username: 'Jane Smith',
      status: 'Pending',
    },
    {
      _id: '3',
      currency1: 'GUAP',
      currency2: 'R2PIP',
      username: 'Emily Jones',
      status: 'Rejected',
    },
    {
      _id: '4',
      currency1: 'GUAP',
      currency2: 'R2PIP',
      username: 'Michael Brown',
      status: 'Approved',
    },
    {
      _id: '5',
      currency1: 'GUAP',
      currency2: 'R2PIP',
      username: 'Linda Wilson',
      status: 'Pending',
    },
  ];

  // Function to open the modal
  const handleVoteClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-12 max-w-[980px] px-4 mx-auto">
      <div className="flex justify-end">
        <button
          className="bg-red1 text-white font-bold py-2 px-4 rounded-lg"
          onClick={handleVoteClick} // Open the modal on click
        >
          Vote
        </button>
      </div>
      <div className="overflow-x-scroll xl:overflow-hidden shadow-xl">
        <table className="mt-4 min-w-[800px] w-full h-fit table-container">
          <thead>
            <tr>
              <th className="text-center px-4 py-2">Filename</th>
              <th className="text-center px-4 py-2">Uploaded At</th>
              <th className="text-center px-4 py-2">Username</th>
              <th className="text-center px-4 py-2">Status</th>
              <th className="text-center px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyCurrencies.map((resume) => (
              <tr key={resume._id} className="bg-gray-100">
                <td className="px-4 py-2 text-black text-center">{resume.currency1}</td>
                <td className="px-4 py-2 text-black text-center">{resume.currency2}</td>
                <td className="px-4 py-2 text-black text-center">{resume.username}</td>
                <td className="px-4 py-2 text-black text-center">{resume.status}</td>
                <td className="px-4 py-2 flex gap-x-4 justify-center">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Action</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Vote Modal */}
      <VoteModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default VoteTable;
