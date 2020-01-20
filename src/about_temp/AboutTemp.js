import React from 'react';
import {Card, Image, Segment} from 'semantic-ui-react';
import pic from '../about_temp/kittyShark.jpg';

const Contrib = () => {
    return (
        <Card >
            <Card.Header>
                Header Here
            </Card.Header>
            <Card.Content>
                I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. 
                I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. 
                I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. 
                We are Groot. We are Groot. We are Groot. We are Groot. I am Groot.
            </Card.Content>
            <Card.Content>
                Who wants mayo on a hotdog?  If we do this, how do we know it's gonna end any differently than 
                it did before?  Alright, Heartbreaker. She's alone. This is our shot. [He turns back to where 
                Thor was moments ago] Thor? Thor!  Remember... You have to return the stones to the exact 
                moment you got them. Or you're gonna open up a bunch of nasty alternative realities. 
            </Card.Content>
            <Card.Content>
                    <img src = {pic} alt = 'placeholder' width = '50%'/>
            </Card.Content>        

        </Card>



    )

}

// <Card.Group centered itemsPerRow={5}

const AboutTemp = () => {
    return (
        <div style = {{display: "flex"}}>
            <Segment style = {{margin: "5px"}}>
                <Segment.Group horizontal>
                    <Card.Group>
                        <Contrib/>
                        <Contrib/>
                        <Contrib/>
                        <Contrib/>
                        <Contrib/>    
                    </Card.Group>
                </Segment.Group>       


            </Segment>
        
        
        
        </div>
        



    )



}

export default AboutTemp;