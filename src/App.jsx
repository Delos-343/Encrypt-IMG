import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages";
import { AddNews, EditNews } from "./components";
import { useAuth } from "./hooks";

function App() {

  const { isLoggedIn } = useAuth();

  // Function to render AddNews or redirect if not logged in
  const renderAddNews = () => {
    return isLoggedIn ? <AddNews /> : <Navigate to="/" />;
  };

  // Function to render EditNews or redirect if not logged in
  const renderEditNews = (props) => {
    return isLoggedIn ? <EditNews {...props} /> : <Navigate to="/" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={renderAddNews} />
        <Route path="/edit/:id" element={renderEditNews} />
      </Routes>
    </>
  );
}

export default App;
