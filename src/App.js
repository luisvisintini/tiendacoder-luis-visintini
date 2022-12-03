import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
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
      <Navigation/>
      <LiquidosContainer/>
      <ItemCount 
        valorInicial={0}
        stockInicial={5}
        onAdd={handleOnAdd}
      />
    </div>
  );
}

export default App;
