
import React from 'react'
import Register from './Register';
import Login from './Login';
import Classes from './Classes'
import Logout from './Logout'
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'
import './index.css'

const App = ()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact  to="/register"></NavLink>
            <NavLink exact  to="/"></NavLink>
            <NavLink exact  to="/logout"></NavLink>
            <NavLink exact to="/classes"></NavLink>
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/register" element={<Register />}/>
              <Route exact path="/logout" element={<Logout />} />
              <Route  exact path="/classes" element={<Classes />} />
        
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
