import React from 'react';
import styled from 'styled-components';
import jungle from '../content/background_jungle_01.png';

// font-family: climbing_plantregular;;

// text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

const BannerDiv = styled.div`  
    color: #386600;
    fontWeight: bold;
    font-family: climbing_plantregular;
    font-family: 'Eater', cursive;
    text-shadow: -3.5px -3.5px  #DDD, 3.5px -3.5px  #DDD, -3.5px 3.5px  #DDD, 3.5px 3.5px  #DDD;
    width: 60%;
    height: 90px;
    display: flex;
    font-size: 60px;
    padding: 50px;
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
    marginTop: 350px;
    background-image: url(${jungle});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 90%;
    margin: 5px auto;
    position: absolute;
    z-index : -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
`;

// box-sizing: content-box;

// anchor requires some extra work!!! to implement, no native support
// const Atag = style.a`
//     color: ghostwhite;
//     padding: 0 20px;

// `


export {
    BannerDiv,
    NavDiv,
    MainDiv,


};