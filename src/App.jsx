import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MenuDetail from "./components/MenuDetail";

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="menu" element={<Home/>}/>
          <Route path="menu/:id" element={<MenuDetail/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App