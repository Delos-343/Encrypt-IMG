// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NewsApp, Hero } from "../components";

const HomePage = () => {
  
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
      {activeTab === 'news' ? (
        <div className="flex justify-center">
          <NewsApp />
        </div>
      ) : (
        activeTab === 'dashboard' && (
          <div className="flex justify-center h-screen">
            <Hero />
          </div>
        )
      )}
    </>
  );
};

export default HomePage;
