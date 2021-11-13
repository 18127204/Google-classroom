
import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';
import './index.css'
const App = ()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/register">Register</NavLink>
            <NavLink exact activeClassName="active" to="/login">Login</NavLink>
            <NavLink exact activeClassName="active" to="/logout">Logout</NavLink>
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/register" element={<Register />}/>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
