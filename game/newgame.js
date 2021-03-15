"use strict";

function newGame() {
  return {
    lastTick: Date.now(),
    universeAge: EN(0),
    timeFoam: EN(0),
    tempComp: EN(0),
  };
}
