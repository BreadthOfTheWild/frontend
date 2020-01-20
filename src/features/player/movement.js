import store from "../../config/store";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";

// Logic For Character Movment
export default function handleMovement(player) {

  // Prevents Character From Moving Off Of the Map
  function observeBoundries(oldPos, newPos) {
    return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
           (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
  }

  // Prevents Character From Moving Over A Blocking Tile (Rocks, Walls, Etc)
  function observeSolidObjects(oldPos, newPos) {
    const tiles = store.getState().map.tiles

    const y = newPos[1] / SPRITE_SIZE
    const x = newPos[0] / SPRITE_SIZE
   
    const nextTile = tiles[y][x]

    return nextTile.value < 5
  }

  // Dispatches Movement Data and Iterates Walk Animation via walkIndex
  function dispatchMove(direction, newPos) {
    const walkIndex = getWalkIndex()
   
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: newPos,
        direction,
        walkIndex,
        spriteLocation: getSpriteLocation(direction, walkIndex),
      }

    });
  }

  // Calculates New Position Co Ordinates Based On Direction
  // Direction comes From Key Press
  function getNewPosition(oldPos, direction) {
    switch (direction) {
      case "WEST":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "EAST":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "NORTH":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case "SOUTH":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    }
  }

  // Determines Which Sprite From Sprite Cheet To Use
  // Direction comes From Key Press
  function getSpriteLocation(direction, walkIndex) {
    switch(direction) {
      case 'EAST':
        return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*1}px`
      case 'SOUTH':
        return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*0}px`
      case 'WEST':
        return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*2}px`
      case 'NORTH':
        return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*3}px`
    }
  }

  // Iterates Walk Index
  // Walk Index Used To Find Sprite On Sprite Sheet
  function getWalkIndex() {
    const walkIndex = store.getState().player.walkIndex

    return walkIndex >= 7 ? 0 : walkIndex + 1
  }

  // Transitions Sprite To Opposite Side Of Board
  function transition(oldPos, direction) {
    if(direction === 'WEST' || direction === 'EAST') {

      if(!oldPos[0] > 0) {
        return [ 760, oldPos[1] ]
      } 
      else if(!oldPos[0] < MAP_WIDTH - SPRITE_SIZE) {
       return [ 0, oldPos[1] ]
      }

    } else {

      if(!oldPos[1] > 0) {
        return [ oldPos[0], 360 ]
      } 
      else if(!oldPos[1] < MAP_HEIGHT - SPRITE_SIZE) {
       return [ oldPos[0], 0 ]
      }

    }
  }

  // Attempts To Move Character
  function attemptMove(direction) {
    const oldPos = store.getState().player.position;
    const newPos = getNewPosition(oldPos, direction);

    // If Character Is Within The Map and Not Hitting A Solid Object
    if(observeBoundries(oldPos, newPos) && observeSolidObjects(oldPos, newPos)) {
      // Dispatch Move To Redux Store
      dispatchMove(direction, newPos)

    } else if(!observeBoundries(oldPos, newPos)) {
      const transitionPos = transition(oldPos, direction);

      dispatchMove(direction, transitionPos)
    }
  }

  // Converts Key Press To Direction
  function handleKeyDown(e) {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        return attemptMove("WEST");
      case 65:
        return attemptMove("WEST");

      case 38:
        return attemptMove("NORTH");        
      case 87:
        return attemptMove("NORTH");

      case 39:
        return attemptMove("EAST");
      case 68:
        return attemptMove("EAST");

      case 40:
        return attemptMove("SOUTH");
      case 83:
        return attemptMove("SOUTH");
        
      default:
        console.log(e.keyCode);
    }
  }

  // Attaches Listener For Key Presses
  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });
 
  return player;
}
