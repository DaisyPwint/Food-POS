import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { Home, Cart, Menu, MenuDetail,Checkout, Orders } from '@pages'

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="menu" element={<Menu/>}/>
          <Route path="menu/:id" element={<MenuDetail/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="orders" element={<Orders/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App