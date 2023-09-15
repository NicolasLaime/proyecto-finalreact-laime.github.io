import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './main.css';
import Nosotros from './components/Nosotros/Nosotros';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import Carrito from './components/Carrito/Carrito';
import { CartProvider } from './components/Context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';


function App() {
  
  
  return (


      <div>

      <CartProvider>
      <BrowserRouter>

     
         
       <NavBar />

       <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer  />} />
          <Route path='/Nosotros' element={<Nosotros/>} />
          <Route path='/productos/:categoria' element={<ItemListContainer/>} />
          <Route path='/productos' element={<ItemListContainer/>} />
          <Route path='/Contacto' element={<Contacto/>} />
          <Route path='/Carrito' element={<Carrito/>} />
          <Route path='/Checkout' element={<Checkout/>} />






       </Routes>

       <Footer/>
       
       </BrowserRouter>

       </CartProvider>

       </div>

    
  );
}

export default App;
