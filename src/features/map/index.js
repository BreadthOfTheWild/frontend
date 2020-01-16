import React from "react";

import { useSelector } from 'react-redux';
import { SPRITE_SIZE } from '../../config/constants';

import './styles.css';

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

function MapTile(props) {
  return <div className={`tile ${getTileSprite(props.value)}`} style={{ height: SPRITE_SIZE, width: SPRITE_SIZE }} />
}

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