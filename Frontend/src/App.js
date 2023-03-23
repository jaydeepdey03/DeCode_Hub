import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Queries from './Pages/Queries';
import ErrorPage from './Pages/404';
import Answer from './Pages/Answer';
import Admin from './Pages/admin';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query" element={<Queries />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
