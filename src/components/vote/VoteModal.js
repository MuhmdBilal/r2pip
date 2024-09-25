import React from 'react';
import { IoMdClose } from "react-icons/io";

export default function VoteModal({ isOpen, onClose }) {
  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-3 rounded-lg shadow-lg relative">
        {/* Cross icon to close the modal */}
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
         <IoMdClose size={30}/>
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-bold mb-4 text-center">Vote Modal</h2>

        {/* Title Input */}
        <label className='text-black'>Title</label>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        {/* Description Input */}
        <label className='text-black'>Description</label>
        <textarea
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows="3"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-4">

          <button
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="bg-red1 text-white py-2 px-4 rounded">
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}
