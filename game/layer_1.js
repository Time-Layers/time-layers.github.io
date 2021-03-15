"use strict";

function getTempCompCost() {
  return EN(10).times(EN(10 / 9).pow(game.tempComp.pow(10 / 9)));
}

function buyTempComp() {
  if (game.timeFoam.gte(getTempCompCost())) {
    game.timeFoam = game.timeFoam.minus(getTempCompCost());
    game.tempComp = game.tempComp.add(1);
  }
}

function getTempCompEffect() {
  return getTempCompBase().pow(game.tempComp);
}

function getTempCompBase() {
  return EN(1.1);
}
