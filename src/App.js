import { useSelector } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import CartLayout from './components/CartLayout';
import Footer from './components/Footer';
import LocationLayout from './components/LocationLayout';

function App() {
  const isCartOpen = useSelector((store) => store.cart.openCart);
  const isLocationOpen = useSelector((store) => store.cart.openLocation);

  return (
    <div className='relative'>
      <Header/>
      <Body/>
      {isCartOpen && <CartLayout/>}
      {isLocationOpen && <LocationLayout/>}
      <Footer/>
    </div>
  );
}

export default App;
