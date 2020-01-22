import React, {useState, useEffect} from "react";
import World from "../../features/world";

import AboutPage from '../about/AboutPage'
import LandingPage from '../landing/LandingPage';
import {useForm} from '../customHooks/useForm';  // use { } when there is no default export
import {Route, NavLink, Switch} from 'react-router-dom';
import {Dropdown, Label, Menu, Segment} from 'semantic-ui-react';
import {Button, Checkbox, Form, Icon, Input} from 'antd';

// import './nav.css';
// import scales from '../content/scales.jpg';
import vines from '../content/vines.jpg';

import {
    BannerDiv,
    NavDiv,

} from '../styledComp/StyledComp';


const NavBar = () => {
    const [fixed, setFixedMenu] = useState(true);
    
    const [values, handleChange] = useForm({username: '', password: ''});
    const [showLogin, setShowLogin] = useState(false);

    let userName = 'testuser';


    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userName))
    }, []);

    const loginHandler = () => {
        setShowLogin(true);


    }

    const handleSubmit = (e) => {
        // e.preventDefault();


    }



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

                {showLogin 
                    ?
                        <div style = {{width: '80%', margin: '0 auto'}} >
                            <Form onSubmit = {handleSubmit()}>
                                <Form.Item  style = {{marginBottom: '2px'}}>
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        name = 'firstName'
                                        placeholder = 'first name'
                                        value = {values.userName}
                                        onChange = {handleChange}
                                        size = 'small' 
                                        style = {{width: '80%', marginBottom: '0px'}}   
                                    />
                                </Form.Item>
                                <Form.Item style = {{marginBottom: '2px'}}>
                                    <Input.Password
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                        type = 'password'
                                        name = 'password'
                                        placeholder = 'password'
                                        value = {values.password}
                                        onChange = {handleChange}
                                        size = 'small'  
                                        style = {{width: '80%'}}   
                                    /> 
                                </Form.Item>
                                <Form.Item>
                                    
                     
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                    </Button>
                                    <div>
                                    <span style = {{paddingRight: '20px'}}>  <a style = {{color: 'ghostwhite'}} href="">register now!</a>   </span>  
                                    <span> <a style = {{color: 'ghostwhite'}} className="login-form-forgot" href=""> Forgot password </a></span>  
                                    
                                    </div>
                              </Form.Item>                                
                            </Form>
                        </div>
                    :

                        <div>
                            <Button style = {{backgroundColor: '#00b377', border: '1px solid #b3cccc', marginRight: '10px'}}
                                onClick = {() => loginHandler()}
                            >
                            Log in/Sign up
                            </Button>
                       
                        </div>
                               
                }

                    <Dropdown text = 'Player Info' button style = {{border: '1px solid #b3cccc'}}>    
                        <Dropdown.Menu>
                        <Menu.Item active>
                            <NavLink to = '/'>Home</NavLink>
                        
                        </Menu.Item>
                        <Menu.Item> Active Players</Menu.Item>
                        <Menu.Item> All Players</Menu.Item>
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