import React, {useState} from "react";
import World from "./features/world";

import AboutTemp from './about_temp/AboutTemp'
import LandingTemp from './landing_temp/LandingTemp';

import {Route, NavLink, Switch} from 'react-router-dom';
import {Dropdown, Menu, Segment} from 'semantic-ui-react';
import './nav.css';

const App = () => {

    const [isActive, setIsActive] = useState(false, "isActive State");
  
    return (
        <div>
            
            <Menu>
                <Menu.Item>
                    <NavLink to = '/' exact> Home </NavLink> 
                </Menu.Item>
                <Menu.Item>
                    <NavLink to = '/about' exact> About </NavLink> 
                </Menu.Item>
                <Menu.Item>
                    <NavLink to = '/Login' exact> Login </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to = '/world'> World </NavLink>   
                </Menu.Item>
        
                
                
                <Menu.Menu position = 'right'>
                <Dropdown>
                <Dropdown.Menu>
                <Dropdown.Item>
                <NavLink to = '/' exact> Home </NavLink> 
                </Dropdown.Item>
                <Dropdown.Item>
                <NavLink to = '/about' exact> About </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                <NavLink to = '/world'> World </NavLink>   
                </Dropdown.Item>
                
                </Dropdown.Menu>
                {/*
                    <div style = {{display: 'flex', zIndex: '0', flexDirection: 'column'}}>
                    <NavLink to = '/login' exact> Login </NavLink>  
                    </div>
                */}                                    
                </Dropdown>
                </Menu.Menu>
            </Menu>
            


                
            <Route
                exact path = '/' 
                render = { (props) => <LandingTemp {...props} landingProp = {` the Landing Page`} />}
            />

            <Route
                exact path = '/about' 
                render = { (props) => 
                <AboutTemp 
                    {...props} 
                    aboutProp = {` the About Page`} 
                />}
            />
        
        {/*    
            <Route
                exact path = 'login' 
                render = { (props) => 
                    <Login 
                    {...props} 

                    LoginProp = {` the Login Page`} 
                    />}
            />
        */}            
            <Route
                exact path = '/world' 
                render = { (props) => 
                <World 
                    {...props} 
                    worldProp = {` the World Page`} 
                />}
            />
             
    
    
        </div>
  )
}

export default App;
