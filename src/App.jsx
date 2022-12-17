import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LiquidoDetailContainer from './components/LiquidoDetailContainer/LiquidoDetailContainer';
import LiquidosContainer from './components/LiquidosContainer/LiquidosContainer';
import Navigation from './components/Navbar/Navigation';
import { CarritoProvider } from './context/CartContext';



function App() {

  return (
    <>
      <div>
        <CarritoProvider>
          <BrowserRouter>
            <Navigation/>
              <Routes>
                <Route path='/' element={<LiquidosContainer greeting="Nuestros Productos"/>} />
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/marca/:marcaId' element={<LiquidosContainer/>}/>
                <Route path='/liquido/:liquidoId' element={<LiquidoDetailContainer/>}/>
                <Route path='/carrito' element={<Cart/>}/>
              </Routes>
          </BrowserRouter>
          <Footer/>
        </CarritoProvider> 
      </div>
    </>
  );
}

export default App;
