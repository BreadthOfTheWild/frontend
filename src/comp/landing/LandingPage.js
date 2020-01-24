import React from 'react';
import {Button, Container, Image, Segment} from 'semantic-ui-react';

import game from '../content/Landing_GamePlay.png';

const LandingTemp = (props) => {
    return (
            <div style = {{padding: '20px', color: 'ghostwhite', display: 'flex', flexDirection: 'column', marginTop: '00px'}}>
                <h3> {props.landing_temp_title}</h3>
                    <p >
                    Have fun with your friends navigating through the maze of 100 rooms! Navigte with either the arrow keys
                    or traditional WSAD keyboard navigation. You are provided with hints where you can go next in the 
                    room description.
                    </p>
                    <div style = {{maxWidth: '60%', margin: '0 auto'}}>
                        <Image src = {game} alt = 'game play'/>
                    </div>
            </div>
    )
}

export default LandingTemp;