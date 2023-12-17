// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Modal = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className="fixed bottom-8 right-8 bg-blue-500 text-gray-100 px-4 py-2 rounded">
        {isOpen ? 'Login?' : 'Login'}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              Modal Content
            </h2>
            <p>
              This is a Framer Motion animated modal.
            </p>
            <button onClick={toggleModal} className="mt-8 bg-blue-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;