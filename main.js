import { Card } from "./engine/Card.js";

const CARDS = [];
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

const SCORE_CONTAINER = document.createElement("div");
const RESTART_BUTTON = document.createElement("button");
let score = 1000;
export class Main{
  constructor() {
  }
  setBackground(){
    document.body.style.backgroundImage = "url('assets/yugiohBackground.jpg')";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.top = "100px";   
  }
  createGridContainer() {
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
  centerGridContainer() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const gridContainerHeight = GRID_CONTAINER.clientHeight;
    const gridContainerWidth = GRID_CONTAINER.clientWidth;
    const verticalMargin = (windowHeight - gridContainerHeight) / 2;
    GRID_CONTAINER.style.marginTop = `${verticalMargin}px`;
    const horizontalMargin = (windowWidth - gridContainerWidth) / 2;
    GRID_CONTAINER.style.marginLeft = `${horizontalMargin}px`;
  }
  createScoreContainer() {
    SCORE_CONTAINER.id = "scoreContainer";
    SCORE_CONTAINER.style.position = "fixed";
    SCORE_CONTAINER.style.top = "0";
    SCORE_CONTAINER.style.left = "0";
    SCORE_CONTAINER.style.paddingLeft = "20px";
    SCORE_CONTAINER.style.paddingTop = "20px";
    SCORE_CONTAINER.style.color = "white";
    SCORE_CONTAINER.textContent = `Score: ${score}`;
    SCORE_CONTAINER.style.fontSize = "30px";
    document.body.appendChild(SCORE_CONTAINER);
  }
  createRestartButton() {
    RESTART_BUTTON.id = "restartButton";
    RESTART_BUTTON.textContent = "Restart";
    RESTART_BUTTON.style.position = "fixed";
    RESTART_BUTTON.style.top = "40px";
    RESTART_BUTTON.style.left = "10px";
    RESTART_BUTTON.style.margin = "10px"
    RESTART_BUTTON.style.height = "35px"
    RESTART_BUTTON.style.width = "140px"
    RESTART_BUTTON.style.marginTop = "20px";
    RESTART_BUTTON.addEventListener("click", restartGame);
    document.body.appendChild(RESTART_BUTTON);
  }
  updateScore() {
    SCORE_CONTAINER.textContent = `Score: ${score}`;
  }
  createCards() {
    const frontFacesTemp = [...FRONT_FACE_PATHS, ...FRONT_FACE_PATHS].sort(() => Math.random() - 0.5);
    const totalCards = frontFacesTemp.length;
    for (let i = 1; i <= totalCards; i++) {
      let card = new Card(BACK_FACE_PATH, "assets/" + frontFacesTemp[i - 1], i);
      GRID_CONTAINER.appendChild(card.getCard().getNode());
      CARDS.push(card);
    }
  }
  dealCards() {
    const tl = gsap.timeline({ onComplete: () => null });
    CARDS.forEach((card, index) => {
      const x = window.innerWidth;
      const y = window.innerHeight;
      tl.from(card.getCard().getNode(), { duration: 0.2, x, y, ease: "power1.out" }, `card${index}`);
    });
  }
  restartGame() {
    score = 1000;
    updateScore();
    CARDS.forEach((card) => {
      GRID_CONTAINER.removeChild(card.getCard().getNode());
    });
    CARDS.length = 0;
    createCards();
    dealCards();
  }
  totalFlipping() {
    var count = 0
    for (let i = 0; i < CARDS.length; i++) {
      if (CARDS[i].isFlipping) {
        count++
      }
    }
    return count
  }
}
let main = new Main()
// function setBackground() {
//   document.body.style.backgroundImage = "url('assets/yugiohBackground.jpg')";
//   document.body.style.backgroundAttachment = "fixed";
//   document.body.style.backgroundRepeat = "no-repeat";
//   document.body.style.backgroundSize = "cover";
//   document.body.style.top = "100px";
// }

// function createGridContainer() {
//   GRID_CONTAINER.id = "cardContainer";
//   GRID_CONTAINER.style.display = "grid";
//   GRID_CONTAINER.style.width = "700px";
//   GRID_CONTAINER.style.gridTemplateColumns = "repeat(5, 2fr)";
//   GRID_CONTAINER.style.gridColumnGap = "10px";
//   GRID_CONTAINER.style.gridRowGap = "10px";
//   document.body.appendChild(GRID_CONTAINER);
//   window.addEventListener("load", centerGridContainer);
//   window.addEventListener("resize", centerGridContainer);
// }

// function centerGridContainer() {
//   const windowHeight = window.innerHeight;
//   const windowWidth = window.innerWidth;
//   const gridContainerHeight = GRID_CONTAINER.clientHeight;
//   const gridContainerWidth = GRID_CONTAINER.clientWidth;
//   const verticalMargin = (windowHeight - gridContainerHeight) / 2;
//   GRID_CONTAINER.style.marginTop = `${verticalMargin}px`;
//   const horizontalMargin = (windowWidth - gridContainerWidth) / 2;
//   GRID_CONTAINER.style.marginLeft = `${horizontalMargin}px`;
// }

// function createScoreContainer() {
//   SCORE_CONTAINER.id = "scoreContainer";
//   SCORE_CONTAINER.style.position = "fixed";
//   SCORE_CONTAINER.style.top = "0";
//   SCORE_CONTAINER.style.left = "0";
//   SCORE_CONTAINER.style.paddingLeft = "20px";
//   SCORE_CONTAINER.style.paddingTop = "20px";
//   SCORE_CONTAINER.style.color = "white";
//   SCORE_CONTAINER.textContent = `Score: ${score}`;
//   SCORE_CONTAINER.style.fontSize = "30px";
//   document.body.appendChild(SCORE_CONTAINER);
// }

// function createRestartButton() {
//   RESTART_BUTTON.id = "restartButton";
//   RESTART_BUTTON.textContent = "Restart";
//   RESTART_BUTTON.style.position = "fixed";
//   RESTART_BUTTON.style.top = "40px";
//   RESTART_BUTTON.style.left = "10px";
//   RESTART_BUTTON.style.margin = "10px"
//   RESTART_BUTTON.style.height = "35px"
//   RESTART_BUTTON.style.width = "140px"
//   RESTART_BUTTON.style.marginTop = "20px";
//   RESTART_BUTTON.addEventListener("click", restartGame);
//   document.body.appendChild(RESTART_BUTTON);
// }

// function updateScore() {
//   SCORE_CONTAINER.textContent = `Score: ${score}`;
// }

// function createCards() {
//   const frontFacesTemp = [...FRONT_FACE_PATHS, ...FRONT_FACE_PATHS].sort(() => Math.random() - 0.5);
//   const totalCards = frontFacesTemp.length;
//   for (let i = 1; i <= totalCards; i++) {
//     let card = new Card(BACK_FACE_PATH, "assets/" + frontFacesTemp[i - 1], i);
//     GRID_CONTAINER.appendChild(card.getCard().getNode());
//     CARDS.push(card);
//   }
// }

// function dealCards() {
//   const tl = gsap.timeline({ onComplete: () => null });
//   CARDS.forEach((card, index) => {
//     const x = window.innerWidth;
//     const y = window.innerHeight;
//     tl.from(card.getCard().getNode(), { duration: 0.2, x, y, ease: "power1.out" }, `card${index}`);
//   });
// }

// function restartGame() {
//   score = 1000;
//   updateScore();
//   CARDS.forEach((card) => {
//     GRID_CONTAINER.removeChild(card.getCard().getNode());
//   });
//   CARDS.length = 0;
//   createCards();
//   dealCards();
// }
// export function totalFlipping() {
//   var count = 0
//   for (let i = 0; i < CARDS.length; i++) {
//     if (CARDS[i].isFlipping) {
//       count++
//     }
//   }
//   return count
// }
// setBackground();
// createGridContainer();
// createScoreContainer();
// createRestartButton();
// createCards();
// dealCards();
// totalFlipping()
