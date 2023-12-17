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
        {isOpen ? 'Cancel' : 'Login'}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
            <form className="flex flex-col gap-4">
              <input
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Email"
              />
              <input
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                type="password"
                placeholder="Password"
              />
              <button
                className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                type="submit"
              >
                Login
              </button>
              <button onClick={toggleModal} className="bg-red-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
