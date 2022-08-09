import "./App.css";
import Navbarcanvas from "./components/Navbar/navbar";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element={<Navbarcanvas />} />
      </Routes>
      </div>
  );
}

export default App;