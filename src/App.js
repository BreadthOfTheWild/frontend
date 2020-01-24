import React, {useState} from "react";
import World from "./features/world";
import {Route} from 'react-router-dom';
import NavBar from './comp/nav/NavBar';
import AboutPage from './comp/about/AboutPage';

import {
    MainDiv
} from './comp/styledComp/StyledComp';


const App = () => {

    const [isActive, setIsActive] = useState(false, "isActive State");
  
    return (
        <div style = {{width: '90%', margin: '0 auto'}}>
                <Route path='/' render = { (props) => 
                    <NavBar
                        {...props} 
                    /> }
                /> 
                <Route path='/game' component={World} />
                <Route exact path='/' component={MainDiv} />
                <Route exact path='/about' component={AboutPage} />

                        
        </div>
  );
}

export default App;

