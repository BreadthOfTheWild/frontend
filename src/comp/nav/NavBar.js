import React, {useState, useEffect} from "react";
import World from "../../features/world";

import AboutPage from '../about/AboutPage'
import LandingPage from '../landing/LandingPage';

import {Route, NavLink, Switch} from 'react-router-dom';
import {Button, Dropdown, Label, Menu, Segment} from 'semantic-ui-react';
import './nav.css';
import scales from '../content/scales.jpg';
import vines from '../content/vines.jpg';

import {
    BannerDiv,
    NavDiv
} from '../styledComp/StyledComp';


const NavBar = () => {
    const [fixed, setFixedMenu] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    let userName = 'testuser'


    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userName))
    }, []);



    return (
        <div>
            
            <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
                position = 'right'
                style = {{backgroundImage: `url(${vines})`, border: '2px solid #b3cccc'}}
            >
                <BannerDiv> Djungle Maze</BannerDiv>
                <NavDiv>

                {loggedIn 
                    ?
                        null
                    :

                        <div>
                            <Button style = {{backgroundColor: '#00b377', border: '1px solid #b3cccc'}}>
                            Log in
                            </Button>
                            <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em', marginRight: '5.5em', 
                                border: '1px solid #b3cccc' }}>
                                Sign Up
                            </Button>                        
                        </div>
                
                
                
                }

                    <Dropdown text = 'Player Info' button style = {{border: '1px solid #b3cccc'}}>    
                        <Dropdown.Menu>
                        <Menu.Item as='a' active>
                            <NavLink to = '/'>Home</NavLink>
                        
                        </Menu.Item>
                        <Menu.Item as='a'>Active Players</Menu.Item>
                        <Menu.Item as='a'>All Players</Menu.Item>
                        <Menu.Item position='right'>
                        </Menu.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button style = {{backgroundColor: '#ffcc00', border: '1px solid #b3cccc'}}>
                        <NavLink to = '/about' >About</NavLink>
                    </Button>

                </NavDiv>
            </Menu>            


        
            <Route
                exact path = '/' 
                render = { (props) => <LandingPage {...props} landingProp = {` the Landing Page`} />}
            />

            <Route
                exact path = '/about' 
                render = { (props) => 
                <AboutPage 
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