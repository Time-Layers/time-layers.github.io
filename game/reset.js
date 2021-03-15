"use strict";

function reset(layer) {
  let blankSave = newGame();
  switch(layer) {
    case Infinity:
      for (let thing in blankSave) {
        game[thing] = blankSave[thing];
      };
  }
}
