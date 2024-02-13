import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Blog from "./pages/Blog"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Header from "./component/Header"
import Footer from "./component/Footer"


function App() {


  return (
    <>
    <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/*" element={<Product />} />
        </Routes>
        
      </Router>
        <Footer/>
       
      

    </>
  )
}

export default App
