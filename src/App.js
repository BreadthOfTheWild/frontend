import React, {useState} from "react";
import World from "./features/world";

import NavBar from './comp/nav/NavBar';

import {
    MainDiv
} from './comp/styledComp/StyledComp';


const App = () => {

    const [isActive, setIsActive] = useState(false, "isActive State");
  
    return (
        <div style = {{width: '90%', margin: '0 auto'}}>
            <NavBar />
            <MainDiv>

            </MainDiv>
        </div>
  );
}

export default App;
