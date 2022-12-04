import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import ItemCount from './components/ItemCount/ItemCount';
import LiquidoDetailContainer from './components/LiquidoDetailContainer/LiquidoDetailContainer';
import LiquidosContainer from './components/LiquidosContainer/LiquidosContainer';
import Navigation from './components/Navbar/Navigation';

function App() {

  const handleOnAdd = (cantidad)=> {
    if (cantidad > 0 ) {
      alert(`agregaste ${cantidad} articulos al carrito`)
      return
    } else {
      alert('debes agregar al menos 1 articulo')
    }
  }
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<LiquidosContainer/>} />
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/marca/:marcaId' element={<LiquidosContainer/>}/>
          <Route path='/liquido/:liquidoId' element={<LiquidoDetailContainer/>}/>
          <Route path='/itemcount' element={<ItemCount 
              valorInicial={0}
              stockInicial={5}
              onAdd={handleOnAdd}
            />}/>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
