// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NewsApp, Hero } from "../components";

const HomePage = () => {

  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Check for query parameter 'tab' in the URL
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    
    // If the 'tab' query parameter exists and is 'news', set the active tab to 'news'
    if (tabParam === 'news') {
      setActiveTab('news');
    }
  }, []);

  return (
    <>
      <div className="w-full pt-10 pb-20 justify-center items-middle font-thin tracking-wider text-center text-5xl text-black">
        ENCRYPT-IMG
      </div>
      <div className="flex justify-center items-center mb-5 tracking-widest">
        <ul className="flex space-x-14">
          <li
            className={`cursor-pointer text-lg font-semibold ${
              activeTab === 'dashboard' ? 'text-blue-600' : 'text-gray-500'
            }`}
            onClick={() => handleTabClick('dashboard')}
          >
            Dashboard
          </li>
          <li
            className={`cursor-pointer text-lg font-semibold ${
              activeTab === 'news' ? 'text-blue-600' : 'text-gray-500'
            }`}
            onClick={() => handleTabClick('news')}
          >
            Newsreel
          </li>
        </ul>
      </div>
      <AnimatePresence>
        {activeTab === 'news' ? (
          <motion.div
            key="news"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center"
          >
            <NewsApp />
          </motion.div>
        ) : (
          activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center h-screen"
            >
              <Hero />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePage;
