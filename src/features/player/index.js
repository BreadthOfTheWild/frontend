import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import walkSprite from "./player_walk.png";
import handleMovement from "./movement";

const Player = props => {
  // Location of Character On Map
  const position = useSelector(state => state.player.position)
  // Sprite Location on Sprite Sheet PNG
  const spriteLocation = useSelector(state => state.player.spriteLocation);

  useEffect(() => {
    // Logic In ./movement.js
    handleMovement(null, props.setRoom)
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: position[1],
        left: position[0],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: spriteLocation,
        width: "40px",
        height: "40px"
      }}
    />
  );
}

export default Player;