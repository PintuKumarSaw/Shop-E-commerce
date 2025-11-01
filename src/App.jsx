import './App.css';
import React, { useState, useEffect } from "react";
import { Header } from './components/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Navbar } from './components/header/navbar/navbar';
import Footer from './components/footer/footer';
import MenPage from './components/men/men';
import WomenPage from './components/women/women';
import KidsPage from './components/kids/kids';
import Laptop from './components/laptop/laptop';
import Mobile from './components/mobile/mobile';
import Entertainment from './components/entertainment/entertainment';
import Groceries from './components/groceries/groceries';
import Beauty from './components/beauty/beauty';
import MenShoes from './components/menShoes/menShoes';
import WomenShoes from './components/womenShoes/womenShoes';
import Contact from './components/contact/contact';
import Popup from './components/popup/popup';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Register from './components/register/register';
import Login from './components/login/login';
import CartModal from './components/cart/cart';
import { CartProvider } from './components/cartContext/cartContext';
import { WishlistProvider } from './components/wishlistContext/wishlistContext';
import TodayDeals from './components/deals/deals';
import { AuthProvider } from './components/login/authContext';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App container-fluid">
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
              <Header />
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/men' element={<MenPage />} />
                <Route path='/women' element={<WomenPage />} />
                <Route path='/kids' element={<KidsPage />} />
                <Route path='/laptop' element={<Laptop />} />
                <Route path='/mobile' element={<Mobile />} />
                <Route path='/entertainment' element={<Entertainment />} />
                <Route path='/groceries' element={<Groceries />} />
                <Route path='/beauty' element={<Beauty />} />
                <Route path='/deals' element={<TodayDeals />} />
                <Route path='/menshoes' element={<MenShoes />} />
                <Route path='/womenshoes' element={<WomenShoes />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product/:id' element={<ProductDetails />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='cart' element={<CartModal />} />
              </Routes>
              <Footer />
              {showPopup && <Popup onClose={() => setShowPopup(false)} />}
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
