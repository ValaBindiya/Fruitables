import React from 'react';
import Header from '../user/component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from '../user/container/Home/Home';
import Shop from '../user/container/Shop/Shop';
import ShopDetails from '../user/container/ShopDetails/ShopDetails';
import Cart from '../user/container/Cart/Cart';
import Chackout from '../user/container/Chackout/Chackout';
import Testimonial from '../user/container/Testimonial/Testimonial';
import Page from '../user/container/Page/Page';
import Contact from '../user/container/Contact/Contact';
import Footer from '../user/component/Footer/Footer';

function UserRoutes(props) {
  return (
    <>
      <Header />

      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/Shop' element={<Shop />} />
        <Route exact path='/Shop/:id' element={<ShopDetails />} />
        <Route exact path="/ShopDetails" element={<ShopDetails />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Chackout" element={<Chackout />} />
        <Route exact path="/Testimonial" element={<Testimonial />} />
        <Route exact path="/Page" element={<Page />} />
        <Route exact path="/Contact" element={<Contact />} />

      </Routes>

      <Footer />
    </>
  );
}

export default UserRoutes;