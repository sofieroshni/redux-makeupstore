import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar'
import Products from './Pages/Products'
import Hero from './Components/Hero';
import Footer from "../src/Components/Footer";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Pages/Checkout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        {/* <Products /> */}
        <Routes>
          <Route path="/" element={<Products></Products>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App