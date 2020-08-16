setBackground("Hoth");
setMap("grid");
setDroid("R2-D2");
setDroidSpeed("random");
playSound("R2-D2random");
function whenUp() {
  goUp();
}
function whenDown() {
  goDown();
}
function whenLeft() {
  goLeft();
}
function whenRight() {
  goRight();
}
addCharacter("Stormtrooper");
addCharacter("Stormtrooper");
addCharacter("Stormtrooper");
addCharacter("MouseDroid");
addCharacter("MouseDroid");
addCharacter("MouseDroid");
addCharacter("MouseDroid");
addCharacter("MouseDroid");
addCharacter("MouseDroid");
addCharacter("RebelPilot");
addCharacter("RebelPilot");
addCharacter("RebelPilot");
addCharacter("Probot");
addCharacter("Probot");
addCharacter("Mynock");
addCharacter("Mynock");
moveNormal("Stormtrooper");
moveFast("MouseDroid");
moveNormal("RebelPilot");
moveSlow("Probot");
moveNormal("Mynock");
function whenGetStormtrooper() {
  removePoints(150);
}
function whenGetMouseDroid() {
  addPoints(100);
}
function whenGetRebelPilot() {
  addPoints(50);
}
function whenGetMynock() {
  addPoints(25);
}
function whenGetProbot() {
  removePoints(15);
}
function whenGetAllMouseDroids() {
  endGame("win");
}
function whenGetAllStormtroopers() {
  endGame("lose");
}
