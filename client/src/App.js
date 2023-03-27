import {Routes, Route} from 'react-router';
import './App.css';
import NavBar from "./Components/NavBar"
import HomePage from "./Components/HomePage"
import Login from "./Components/Login"
import Register from "./Components/Register"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
