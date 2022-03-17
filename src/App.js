import "./App.css";
import Topbar from "./Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>    
     <div className="App">
      <Topbar/>
      
      
       <Routes>
       <Route path="/checkout" element={<Checkout/>}/>
       <Route path="/" element={<Home />}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/home" element={<Home />}/>
         
         </Routes>
      </div>
      </BrowserRouter>
 
  );
}

export default App;
