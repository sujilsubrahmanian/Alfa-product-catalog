import './css/App.css'
import Cart from './pages/Cart';
import Order from './pages/Order'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Whatsapp from "./pages/Whatsapp"
import {Routes, Route} from "react-router-dom"
import NavBar from "./Components/NavBar";



function App() {
  
  return (
   <div>
   <NavBar/>
   <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Order" element={<Order/>}/>
      <Route path="/Whatsapp" element={<Whatsapp/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      
      
    </Routes>
   </main>
   </div>
  );
}

export default App;