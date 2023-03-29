import {Routes, Route} from 'react-router';
import './App.css';
import NavBar from "./Components/NavBar"
import HomePage from "./Components/HomePage"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Admin from './Components/Admin';
import User from './Components/User';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route exact path="/home" element={<HomePage/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/admin" element={<Admin/>} />
      <Route exact path="/User" element={<User/>} />
      
      </Routes>
    </div>
  );
}

export default App;
