import { useState } from 'react';

const useAuth = () => {
  // Simulating authentication state (replace this with your actual authentication logic)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    // Simulating login logic (replace this with your actual authentication logic)
    if (email === 'delos@email.com' && password === 'Capricorn343') {
      setIsLoggedIn(true);
      // Perform any additional actions upon successful login (e.g., setting tokens, storing data)
    } else {
      setIsLoggedIn(false);
      // Handle incorrect credentials or other authentication errors
    }
  };

  const logout = () => {
    // Simulating logout logic (replace this with your actual logout logic)
    setIsLoggedIn(false);
    // Perform any additional actions upon logout (e.g., clearing tokens, resetting data)
  };

  return { isLoggedIn, login, logout };
};

export default useAuth;
