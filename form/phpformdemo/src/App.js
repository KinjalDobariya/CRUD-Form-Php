import './App.css';
import { Routes, Route } from "react-router-dom"
import Addcontact from './Addcontact';
import Login from './Login';
import Registration from './Registration';
import Home from './Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={< Login/>} />
        <Route path="/addcontact" element={< Addcontact />} />

      </Routes>

    </>
  );
}

export default App;
