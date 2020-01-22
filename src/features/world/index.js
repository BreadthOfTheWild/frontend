import React, { useState, useEffect } from "react";
import Map from "../map";
import Player from "../player";
import store from '../../config/store';

import { authAxios } from '../../config/requests';
import { generateTiles } from '../../data/map/1';

const World = (props) => { 
  const [ room, setRoom ] = useState(undefined);

  if(room) {
    const tiles = generateTiles(room);

    store.dispatch({ type: 'ADD_TILES', payload: { tiles } });
  }

  useEffect(() => {
    authAxios()
        .get('https://djungle-maze.herokuapp.com/api/adv/init')
        .then(res => {
          const roomData = res.data;

          store.dispatch({ type: "UPDATE_ROOM", payload: roomData })
          setRoom(roomData)
        })
        .catch(err => console.log(err));
  }, []) 

  return (
    room ? <div
              style={{
                position: "relative",
                width: "800px",
                height: "400px",
                margin: "20px auto",
                boxSizing: "content-box",
              }}
            >
              <Map />
              <Player setRoom={setRoom} />
            </div> 
            : <div></div>
  );
}
export default World;