import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import LiquidoDetailContainer from './components/LiquidoDetailContainer/LiquidoDetailContainer';
import LiquidosContainer from './components/LiquidosContainer/LiquidosContainer';
import Navigation from './components/Navbar/Navigation';


function App() {

  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<LiquidosContainer greeting="Nuestros Productos"/>} />
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/marca/:marcaId' element={<LiquidosContainer/>}/>
          <Route path='/liquido/:liquidoId' element={<LiquidoDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
