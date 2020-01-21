import React, {useState} from "react";
import World from "./features/world";
import jungle from './content/background_jungle_01.png';
import NavBar from './nav/NavBar';

import LandingTemp from './landing_temp/LandingTemp';

import {
    MainDiv
} from './styledComp/StyledComp';


const App = () => {

    const [isActive, setIsActive] = useState(false, "isActive State");
  
    return (
        <div style = {{width: '90%', margin: '0 auto'}}>
            <NavBar />
            <div style = {{marginTop: '70px',
                backgroundImage: `url(${jungle})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '90%',
                margin: "5px auto",
                position: "absolute",
                zIndex : "-1",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }}
            >

            </div>
        </div>
  );
}

export default App;

