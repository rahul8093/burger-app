import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import Burger from './components/Dashboard';
import {Login} from './components/GoogleLogin';
import FacebookLoginComponent from './components/FacebookLogin';


function App() {
  return (
    <div className="burgerContent">
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Logout</Link>
            </li>
            </ul>
            </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route exact path="/" element={<><Login/><FacebookLoginComponent/></>}/>
        <Route exact path="/dashboard" element={<Burger/>}/>
         
         
            
        </Routes>
      </div>
    </Router>
  

    </div>
  );
          }

export default App;
