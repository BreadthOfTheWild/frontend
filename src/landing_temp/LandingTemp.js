import React from 'react';
import {Button, Container, Segment} from 'semantic-ui-react';

const LandingTemp = (props) => {
    return (
        <Segment>
            <Container style = {{border: '1px solid blue'}}>
                <h3> {props.landing_temp_title}</h3>
                    <Container >
                        Temp Landing Page
                    </Container>
            
            
            </Container>
        </Segment>
    )







}

export default LandingTemp;