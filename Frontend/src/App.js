import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import useGlobalContext from './hooks/useGlobalContext';
import Admin from './Pages/Admin';

function App() {


  const { walletaddress } = useGlobalContext();
  const address = "tz1hxTwWPfqAAmqp9RiXoWBi1pTLteHD6eaN";

  return (
    <>
      <Routes>
        <Route path="/" element={walletaddress === address ? <Admin /> : <Home />} />
      </Routes>
    </>
  );
}

export default App;
