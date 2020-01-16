import React from "react";

import { useSelector } from 'react-redux';
import { SPRITE_SIZE } from '../../config/constants';

import './styles.css';

// Tile Type Value Pulled From Tiles (Map Matrix), and returns class for corresponding tile
function getTileSprite(type) {
  switch(type) {
    case 0:
      return 'grass'
    case 3:
      return 'tree'
    case 4:
      return 'chest'
    case 5:
      return 'rock'
    case 6:
      return 'tree'
  }
}

// Generates Individual Map Tile
function MapTile(props) {
  return <div className={`tile ${getTileSprite(props.value)}`} style={{ height: SPRITE_SIZE, width: SPRITE_SIZE }} />
}

// Container For Map Row
function MapRow(props) {
  return (
    <div className='row' style={{ height: SPRITE_SIZE }}>
      {
        props.tiles.map( tile => <MapTile key={Math.random()} value={tile} /> )
      }
    </div>
  )
}

const Map = () => {
  // 2 Dimensional Map Matrix [[y, x]]
  const tiles = useSelector(state => state.map.tiles)

  return (
    <div
      style={{
        position: "relative",
        top: "0px",
        left: "0px",
        width: "800px",
        height: "400px",
        border: "4px solid white"
      }}
    >
      {
        tiles.map( row => <MapRow key={Math.random()} tiles={row} /> )
      }
    </div>
  );
}

export default Map;