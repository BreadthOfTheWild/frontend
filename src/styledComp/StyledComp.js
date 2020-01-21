import React from 'react';
import styled from 'styled-components';
import jungle from '../content/background_jungle_01.png';


const BannerDiv = styled.div`  
    color: #39ac39;
    fontWeight: bold;
    width: 50%;
    display: flex;
    font-size: 50px;
    padding: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

const NavDiv = styled.div`
    
    width: 50%;
    display: flex;
    font-size: 20px;
    justify-content: flex-end;
    align-items: center;

`;

const MainDiv = styled.div`
    marginTop: 70px;
    background-image: url(${jungle});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 90%;
    margin: 5px auto;
    position: absolute;
    zIndex : -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;




export {
    BannerDiv,
    NavDiv,
    MainDiv

};