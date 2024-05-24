import './App.css'
import MemeCard from "./components/Card.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Create from './pages/Create.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>

      </Routes>
    </>
  )
}

export default App
