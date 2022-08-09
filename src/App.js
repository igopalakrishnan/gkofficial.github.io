import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}/>
    </Routes>
  );
}

export default App;
