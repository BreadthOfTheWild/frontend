import React from "react";
import Map from "../map";
import Player from "../player";
import store from '../../config/store';

import { tiles } from '../../data/map/1';

const World = (props) => { 
  // Adds Tiles From Tile File to Redux Store <--- Entry Point For Django Server?
  store.dispatch({ type: "ADD_TILES", payload: { tiles } })

  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "400px",
        margin: "20px auto",
        boxSizing: "content-box",    // needed to resolve overflow with Semantic UI React
      }}
    >
      <Map />
      <Player />
    </div>
  );
}
export default World;