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
import axios from 'axios';

import {
    BannerDiv,
    NavDiv,

} from '../styledComp/StyledComp';


const NavBar = (props) => {
    const [fixed, setFixedMenu] = useState(true);
    
    const [values, handleChange] = useForm({username: '', password: ''});
    const [regValues, handleChange2] = useForm({username: '', password1: '', password2: ''});
    const [showLogReg, setShowLogReg] = useState(true)
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    // let userName = 'testuser';
    const token = localStorage.getItem('token');


    useEffect(() => {
        // localStorage.setItem('user', JSON.stringify(userName))
    }, []);

    const logoutHandler = () => {
        localStorage.clear();
        props.history.push('/');
    }

    const loginHandler = () => {
        setShowLogReg(false);
        setShowLogin(true);
    }

    const registerHandler = () => {
        setShowLogReg(false);
        // setShowLogin(true);
    }
    

    const handleLogin = (e) => {
        e.preventDefault(); // now here

        const login = async () => {
            try{
                const resp = await  axios.post(`https://djungle-maze.herokuapp.com/api/login/`, values);
                const data = await resp.data;
                console.log('data >>>', data);
                localStorage.setItem('token', `Token ${data.key}`);
                props.history.push("/game");    

            } catch (err) {
                // setState({errorRight: err.toString()})
                console.log('err >> ', err);
            }
        }
        login();
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const register = async () => {
            try{
                const resp = await  axios.post(`https://djungle-maze.herokuapp.com/api/registration/`, regValues);
                const data = await resp.data;
                console.log('data >>>', data);
                localStorage.setItem('token', `Token ${data.key}`);
                props.history.push("/game");    

            } catch (err) {
                // setState({errorRight: err.toString()})
                console.log('err >> ', err);
            }
        }
        register();


    }


    return (
        <div>
            
            <Menu
                size='large'
                position = 'right'
                style = {{backgroundImage: `url(${vines})`, border: '2px solid #b3cccc'}}
            >
                <BannerDiv> Djungle Maze</BannerDiv>
                <NavDiv>

                    {
                        token ? <Button style = {{backgroundColor: '#00b377', border: '1px solid #b3cccc', marginRight: '10px'}}
                                        onClick = {logoutHandler}>
                                    logout
                                </Button>

                              : showLogReg 
                                ?
                                    <div style = {{display: 'flex'}}>
                                        <Button style = {{backgroundColor: '#00b377', border: '1px solid #b3cccc', marginRight: '10px'}}
                                            onClick = {() => loginHandler()}
                                        >
                                            Log in
                                        </Button>
                                        <Button style = {{backgroundColor: '#00b377', border: '1px solid #b3cccc', marginRight: '10px'}}
                                            onClick = {() => registerHandler()}
                                        >
                                            Register
                                        </Button>
                                    </div>
            
                                :
                                    <div>
                                    {  showLogin
                                        ?
                                            <div style = {{width: '80%', margin: '0 auto'}} >
                                                <Form onSubmit = {e => handleLogin(e)}>
                                                    <Form.Item  style = {{marginBottom: '2px'}}>
                                                        <Input
                                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                            name = 'username'
                                                            placeholder = 'username'
                                                            value = {values.username}
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
                                                    </Form.Item>                                
                                                </Form>
                                            </div>    
                                        :
                                            <div style = {{width: '100%', margin: '0 auto'}} >
                                                <Form onSubmit = {e => handleRegister(e)}>
                                                    <Form.Item  style = {{marginBottom: '2px'}}>
                                                        <Input
                                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                            name = 'username'
                                                            placeholder = 'username'
                                                            value = {regValues.username}
                                                            onChange = {handleChange2}
                                                            size = 'small' 
                                                            style = {{width: '80%', marginBottom: '0px'}}   
                                                        />
                                                    </Form.Item>
                                                    <Form.Item style = {{marginBottom: '2px'}}>
                                                        <Input.Password
                                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                                            type = 'password'
                                                            name = 'password1'
                                                            placeholder = 'password'
                                                            value = {regValues.password1}
                                                            onChange = {handleChange2}
                                                            size = 'small'  
                                                            style = {{width: '80%'}}   
                                                        /> 
                                                    </Form.Item>
                                                    <Form.Item style = {{marginBottom: '2px'}}>
                                                        <Input.Password
                                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                                            type = 'password'
                                                            name = 'password2'
                                                            placeholder = 'password2'
                                                            value = {regValues.password2}
                                                            onChange = {handleChange2}
                                                            size = 'small'  
                                                            style = {{width: '80%'}}   
                                                        /> 
                                                    </Form.Item>
                                                    <Form.Item>                     
                                                        <Button htmlType="submit">
                                                            Register
                                                        </Button>
                                                    </Form.Item>                                
                                                </Form>
                                            </div>
                                    }
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
