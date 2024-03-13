import { Route, Routes } from "react-router-dom";
import Footer from "./user/component/Footer/Footer";
import Header from "./user/component/Header/Header";
import Home from "./user/container/Home/Home";
import Shop from "./user/container/Shop/Shop";
import ShopDetails from "./user/container/ShopDetails/ShopDetails";
import Cart from "./user/container/Cart/Cart";
import Chackout from "./user/container/Chackout/Chackout";
import Testimonial from "./user/container/Testimonial/Testimonial";
import Page from "./user/container/Page/Page";
import Contact from "./user/container/Contact/Contact";


function App() {
  return (
    <>
      <Header />

      <Routes>

      <Route extract path='/' element={<Home />} />
      <Route extract path='/Shop' element={<Shop />} />
      <Route extract path="/ShopDetails" element={<ShopDetails />} />
      <Route extract path="/Cart" element={<Cart />} />
      <Route extract path="/Chackout" element={<Chackout />} />
      <Route extract path="/Testimonial" element={<Testimonial />} />
      <Route extract path="/Page" element={<Page />} />
      <Route extract path="/Contact" element={<Contact />} />

      </Routes>

      <Footer />
    </>

  );
}

export default App;
