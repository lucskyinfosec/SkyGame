import { Card } from "./engine/Card.js";
const CARDS=[]
const GRID_CONTAINER = document.createElement("div");
const BACK_FACE_PATH = `assets/yugiohCard.jpeg`;
const FRONT_FACE_PATHS = [
  "darkMagician.jpeg",
  "divintity.jpeg",
  "dragon.jpeg",
  "exodia.jpeg",
  "gogeta.jpeg",
  "horakhty.jpeg",
  "obelisk.jpeg",
  "raviel.jpeg",
  "slifer.jpeg",
  "winged.jpeg",
];

function setBackground() {
  document.body.style.backgroundImage = "url('assets/yugiohBackground.jpg')";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.top = "100px";
}

function createGridContainer(){
  GRID_CONTAINER.id = "cardContainer";
  GRID_CONTAINER.style.display = "grid";
  GRID_CONTAINER.style.width = "700px";
  GRID_CONTAINER.style.gridTemplateColumns = "repeat(5, 2fr)";
  GRID_CONTAINER.style.gridColumnGap = "10px";
  GRID_CONTAINER.style.gridRowGap = "10px";
  document.body.appendChild(GRID_CONTAINER);
  window.addEventListener("load", centerGridContainer);
  window.addEventListener("resize", centerGridContainer);
}

function centerGridContainer() {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const gridContainerHeight = GRID_CONTAINER.clientHeight;
  const gridContainerWidth = GRID_CONTAINER.clientWidth;
  const verticalMargin = (windowHeight - gridContainerHeight) / 2;
  GRID_CONTAINER.style.marginTop = `${verticalMargin}px`;
  const horizontalMargin = (windowWidth - gridContainerWidth) / 2;
  GRID_CONTAINER.style.marginLeft = `${horizontalMargin}px`;
}

function createCards(){
  const frontFacesTemp = [...FRONT_FACE_PATHS, ...FRONT_FACE_PATHS].sort(() => Math.random() - 0.5);
  const totalCards = frontFacesTemp.length;
  for (let i = 1; i <= totalCards; i++) {
    let card = new Card(BACK_FACE_PATH, "assets/"+frontFacesTemp[i - 1], i);
    GRID_CONTAINER.appendChild(card.getCard().getNode());
    CARDS.push(card)
  }
}
setBackground();
createGridContainer();
createCards();