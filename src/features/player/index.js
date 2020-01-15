import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import walkSprite from "./player_walk.png";
import handleMovement from "./movement";

const Player = () => {
  const position = useSelector(state => state.player.position)
  const spriteLocation = useSelector(state => state.player.spriteLocation);

  useEffect(() => {
    handleMovement()
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