import React from 'react';
import {Button, Container, Image, Segment} from 'semantic-ui-react';

import game from '../content/Landing_GamePlay.png';

const LandingTemp = (props) => {
    return (
            <div style = {{padding: '20px', color: 'ghostwhite', display: 'flex', flexDirection: 'column', marginTop: '150px'}}>
                <h3> {props.landing_temp_title}</h3>
                    <p >
                    Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
                    De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo 
                    vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. 
                    Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus 
                    resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket 
                    bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, 
                    suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum 
                    defunctis go lum cerebro. Nescio brains an Undead
                    </p>
                    <div style = {{maxWidth: '100%', margin: '0 auto'}}>
                        <Image src = {game} alt = 'game play'/>
                    </div>
            </div>
    )
}

export default LandingTemp;