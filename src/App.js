import React, {useState} from "react";
import World from "./features/world";

import NavBar from './nav/NavBar';
import AboutTemp from './about_temp/AboutTemp';
import LandingTemp from './landing_temp/LandingTemp';

import {Route, NavLink, Switch} from 'react-router-dom';
import {Dropdown, Menu, Segment} from 'semantic-ui-react';
import './nav.css';

const App = () => {

    const [isActive, setIsActive] = useState(false, "isActive State");
  
    return (
        <div>
            <NavBar/>

             
    
    
        </div>
  )
}

export default App;

