import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import React,{useState} from 'react';
import Home from './pages/Home/Home';
import Tools from './pages/Tools/Tools';
import Rents from './pages/Rent/Rent';
import Labour from './pages/Labours/Labour';
import Chat from './pages/Chat/Chat';
import Connect from "./pages/connect/connect";
import Weather from "./pages/weather/weather";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup"
import Gmeat from "./pages/gmeat";
import Additem from "./pages/add/add"

function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <BrowserRouter>
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tools" element={<Tools/>}/>
      <Route path="/rent" element={<Rents/>}/>
      <Route path="/labour" element={<Labour/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/connect" element={<Connect/>}/>
      <Route path="/weather" element={<Weather/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/collection/getmeat" element={<Gmeat/>}/>
      <Route path="/additem" element={<Additem/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
