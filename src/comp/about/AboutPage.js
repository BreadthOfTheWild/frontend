import React from 'react';
import {Card, Container, Image, Label, Segment} from 'semantic-ui-react';

import arpitasinha from './arpitasinha.png';
import benardjohnson from './bernardjohnson.jpg';
import brettmadrid from './brettmadrid.jpg';
import jamartorres from './jamartorres.jpg';
import stevekutz from './stevekutz.png';


const Contrib = (props) => {
    return (
        <Card style = {{padding: '10px'}}>
            <Image src = {props.src} max-height = '100px'/>
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

const AboutPage = () => {
    return (
        <div style = {{display: "flex", marginTop: '150px'}}>
            
            <Segment style = {{margin: "5px"}}>
                <h2> Team Djungle Maze </h2>
                <Segment.Group horizontal>
                    <Card.Group style = {{padding: '20px'}}>
                        <Contrib name = "Arpita Sinha" src = {arpitasinha} brags = "Loves Django & pipenv more than algorithms"/>
                        <Contrib name = "Bernard Johnson" src = {benardjohnson} brags= "Makes slow computers run futuristic code"/>
                        <Contrib name = "Brett Madrid" src = {brettmadrid} brags = "Does not let little things like pneumonia slow him down"/>
                        <Contrib name = "Jamar Torres" src = {jamartorres} brags = "Makes Django behave as it should" />
                        <Contrib name = "Steve Kutz" src = {stevekutz} brags = "Tries to make things look pretty for the BE"/>    
                    </Card.Group>
                </Segment.Group>       
            </Segment>        
        </div>
    )
}

export default AboutPage;