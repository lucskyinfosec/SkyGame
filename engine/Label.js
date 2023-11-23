// engine/Label.js
const WIDTH = "30px"
const HEIGHT = "30px"
export class Label {
    constructor(text) {
      this.element = document.createElement('div');
      this.element.textContent=text
      this.element.style.width=WIDTH
      this.element.style.height=HEIGHT
      this.element.style.color="#a15f0e"
      this.element.style.top="40%"
      this.element.style.right="40%"
      this.element.style.position="absolute"
      this.element.style.fontSize="30px"
      this.element.style.boxSizing="border-box"
    }
    getLabel() {
        return this.element
    }
  }
  