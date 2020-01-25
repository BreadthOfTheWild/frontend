import React from 'react';
import {Card, Container, Image, Label, Segment} from 'semantic-ui-react';

import arpitasinha from './arpitasinha.jpg';
import benardjohnson from './bernardjohnson.jpg';
import brettmadrid from './brettmadrid.jpg';
import jamartorres from './jamartorres.jpg';
import stevekutz from './stevekutz.png';

import {
    MainDiv,
    AboutDiv,
} from '../styledComp/StyledComp';

const Contrib = (props) => {
    return (
        <Card style = {{padding: '4px', backgroundColor: '#fefcf6', border: '2px solid #009933', width: '200px'}}>
            <Image src = {props.src} max-height = '40px'/>
            <Card.Header>
                {props.name}
            </Card.Header>
            
            <Card.Content>
                {props.brags}
            </Card.Content>       
        </Card>
    )
}

// <Card.Group centered itemsPerRow={5}
// font-family: climbing_plantregular;;

// text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

const AboutPage = () => {
    return (
        <MainDiv>

                    <AboutDiv> Team Djunlge Maze </AboutDiv>
        
                    <Card.Group style = {{padding: '5px', display: "flex", marginTop: '20px', justifyContent: 'space-evenly', borderRadius: '5px'}}>

                        <Contrib name = "Arpita Sinha" src = {arpitasinha} brags = "Loves Django & pipenv more than algorithms"/>
                        <Contrib name = "Bernard Johnson" src = {benardjohnson} brags= "Makes slow computers run futuristic code"/>
                        <Contrib name = "Brett Madrid" src = {brettmadrid} brags = "Does not let little things like pneumonia slow him down"/>
                        <Contrib name = "Jamar Torres" src = {jamartorres} brags = "Makes Django behave as it should" />
                        <Contrib name = "Steve Kutz" src = {stevekutz} brags = "Tries to make FE things look pretty for the BE"/>    
                    </Card.Group>       

        </MainDiv>
    )
}

export default AboutPage;


// <h2 style = {{display: 'flex', marginTop: '120px', paddingLeft: '50px', fontFamily: 'climbing_plantregular', fontSize: '50px'}}>Team Djungle Maze</h2>