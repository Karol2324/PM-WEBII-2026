import { useState } from 'react'; // 1. Importamos el gancho
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Tienda from './Pages/Tienda';
import Carrito from './Pages/Carrito';
import Mentorias from './Pages/Mentorias';

function App() {
  // 2. Creamos la lista del carrito (empieza vacía)
  const [carrito, setCarrito] = useState([]);

  // 3. Función para añadir productos
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`¡${producto.title} añadido al carrito! 🌸`);
  };

  const vaciarCarrito = () => {
  setCarrito([]); // Esto vuelve el arreglo a cero
};

  return (
    <main>
      {/* Pasamos la cantidad al Navbar para que el número cambie */}
      <Navbar cantidad={carrito.length} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Tienda agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/carrito" element={<Carrito productosSeleccionados={carrito} />} />
        <Route path="/carrito" element={<Carrito productosSeleccionados={carrito} vaciarCarrito={vaciarCarrito} />} />
        <Route path="/mentorias" element={<Mentorias />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;