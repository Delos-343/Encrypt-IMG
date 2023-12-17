// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineLogin, AiOutlineClose, AiOutlineLogout } from 'react-icons/ai';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        navigate("/");
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const loginWithUsernameAndPassword = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setNotice("You entered a wrong username or password.");
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate("/dashboard");
      setIsOpen(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <button onClick={toggleModal} className="fixed bottom-8 right-8 bg-blue-500 text-gray-100 px-4 py-2 rounded">
        {isOpen ? <AiOutlineClose /> : isLoggedIn ? <AiOutlineLogout /> : <AiOutlineLogin />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded shadow-md w-96"
            >
              <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
              <form className="flex flex-col gap-4">
                { "" !== notice &&
                  <div className="text-xs text-red-300 text-center" role="alert">
                    { notice }
                  </div>
                }
                <input
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  type="password"
                  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                />
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
                    Logout
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                    type="submit"
                    onClick={(e) => loginWithUsernameAndPassword(e)}
                  >
                    Login
                  </button>
                )}
                <button onClick={toggleModal} className="bg-red-500 text-white px-4 py-2 rounded">
                  Cancel
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
