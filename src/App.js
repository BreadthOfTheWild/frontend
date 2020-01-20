import React, {useState} from "react";
import World from "./features/world";
import AboutTemp from './about_temp/AboutTemp'

const App = () => {

    const [isActive, setIsActive] = useState(false, "isActive State");
  
    return (
        <div>
      
  
            <World />
            <AboutTemp/>
    
    
      </div>
  )
}

export default App;
