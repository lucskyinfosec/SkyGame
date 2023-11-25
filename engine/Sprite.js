export class Sprite {
  constructor(imagePath) {
    this.element = document.createElement('img')
    this.element.src = imagePath
    this.element.style.height = "100%"
    this.element.style.width = "100%"
    this.element.style.position = 'absolute';
  }
  getImg() {
    return this.element;
  }
  setImg(src) {
    this.element.style.src = src
  }
  turnOn() {
    this.element.style.display = "block"
  }
  turnOff() {
    this.element.style.display = "none"
  }
}
