import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import walkSprite from "./player_walk.png";
import handleMovement from "./movement";

const Player = () => {
  const position = useSelector(state => state.player.position)

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
        backgroundPosition: "0 0",
        width: "40px",
        height: "40px"
      }}
    />
  );
}

export default Player;