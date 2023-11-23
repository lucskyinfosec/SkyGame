// engine/Node.js
const HEIGHT = "180px"
const WIDTH = "140px"
export class Node {
    constructor(index) {
      this.children = [];
      this.element = document.createElement('div');
      this.element.classList.add('card'+index);
      this.element.style.width=WIDTH
      this.element.style.height=HEIGHT
      this.element.style.position="relative"
    }
    addChild(child) {
      this.children.push(child);
      this.element.appendChild(child);
    }
    getNode(){
      return this.element
    }
  }
  
  