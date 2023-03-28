import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Queries from './Pages/Queries';
import ErrorPage from './Pages/404';
import Answer from './Pages/Answer';
import Admin from './Pages/AdminPage';
import useGlobalContext from './hooks/useGlobalContext';
import { useEffect, useState } from 'react';
import Profile from './Pages/Profile';

function App() {


  const { walletaddress } = useGlobalContext();
  const address = "tz1hxTwWPfqAAmqp9RiXoWBi1pTLteHD6eaN";

  const [isAdmin, setisAdmin] = useState(false);

  useEffect(() => {
    if (walletaddress === address) {
      setisAdmin(true);
    }
  }, [walletaddress]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/query" element={<Queries />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
