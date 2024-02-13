import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Blog from "./pages/Blog"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Login from "./pages/Login"


function App() {


  return (

    <Router>
     
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Layout />
            <Footer />
          </>} />

        <Route path="/blog" element={
          <>
        <Header/>
        <Blog />
        <Footer/>
        </>} />
        <Route path="/shop" element={
        <>
        <Header/>
        <Shop />
        <Footer/>
        </>} />
        <Route path="/cart" element={
        <>
        <Header/>
        <Cart />
        <Footer/>
        </>} />
        <Route path="/product/*" element={
        <>
        <Header/>
        <Product />
        <Footer/>
        </>} />
        <Route path="/login" element={
          <>
         
          <Login/>
        
          </>
        } />
      </Routes>

    
    </Router>




  )
}

export default App
