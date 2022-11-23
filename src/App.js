import './App.css';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import Navigation from './components/Navbar/Navigation';

function App() {
  return (
    <div>
      <Navigation/>
      <ItemsListContainer productos='Nuestros Productos'/>
    </div>
  );
}

export default App;
