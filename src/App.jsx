import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import EstadoOrden from './components/EstadoOrden/EstadoOrden';
import Footer from './components/Footer/Footer';
import LiquidoDetailContainer from './components/LiquidoDetailContainer/LiquidoDetailContainer';
import LiquidosContainer from './components/LiquidosContainer/LiquidosContainer';
import Login from './components/Login/Login';
import Navigation from './components/Navbar/Navigation';
import { AuthProvider } from './context/AuthContext';
import { CarritoProvider } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import Register from './components/Register/Register';

function App() {

  return (
    <>
      <div>
        <BrowserRouter >
          <AuthProvider >
            <CarritoProvider>
              <Navigation/>
                <Routes>
                  <Route path='/' element={
                  <LiquidosContainer greeting="Nuestros Productos"/>} />
                  <Route path='/contacto' element={<Contact/>}/>
                  <Route path='/marca/:marcaId' element={<LiquidosContainer/>}/>
                  <Route path='/liquido/:liquidoId' element={<LiquidoDetailContainer/>}/>
                  <Route path='/carrito' element={<Cart/>}/>
                  <Route path='/checkout' element={<Checkout/>}/>
                  <Route path="/order/:orderId" element={<EstadoOrden />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              <Footer/>
            </CarritoProvider> 
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
