import React, {useState} from "react";
import World from "../features/world";

import AboutTemp from '../about_temp/AboutTemp'
import LandingTemp from '../landing_temp/LandingTemp';

import {Route, NavLink, Switch} from 'react-router-dom';
import {Button, Dropdown, Label, Menu, Segment} from 'semantic-ui-react';
import './nav.css';

import {
    BannerDiv,
    NavDiv
} from '../styledComp/StyledComp';


const NavBar = () => {
    const [fixed, setFixedMenu] = useState(true);

    return (
        <div>
            
            <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
                position = 'right'
            >
                <BannerDiv> Djungle Maze</BannerDiv>
                <NavDiv>
                    <Button style = {{backgroundColor: '#00b377'}}>
                        Log in
                    </Button>
                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em', marginRight: '5.5em' }}>
                        Sign Up
                    </Button>
                    
                    <Dropdown text = 'Player Info' button>    
                        <Dropdown.Menu>
                        <Menu.Item as='a' active>
                        Home
                        </Menu.Item>
                        <Menu.Item as='a'>Active Players</Menu.Item>
                        <Menu.Item as='a'>All Players</Menu.Item>
                        <Menu.Item position='right'>
                        </Menu.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button style = {{backgroundColor: '#ffcc00'}}>
                        About

                    </Button>

                </NavDiv>
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

export default NavBar;