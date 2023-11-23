// engine/Card.js
import { Node } from './Node.js';
import { Sprite } from './Sprite.js';
import { Label } from './Label.js';
export class Card {
    constructor(backCardPath,frontCardPath,index) {
      this.isFlipped = false;
      this.node = new Node(index);
      this.frontFace = new Sprite(frontCardPath);
      this.backFace = new Sprite(backCardPath)
      this.label = new Label(index<10 ? "0"+index : index.toString())
      this.node.addChild(this.frontFace.getImg());
      this.node.addChild(this.backFace.getImg())
      this.node.addChild(this.label.getLabel());
      this.frontFace.turnOff()
      this.node.getNode().addEventListener('click', () => this.flip3());
    }
    // flip() {
    //   this.isFlipped = !this.isFlipped;
    // }
    isFlipped(){
      return this.isFlipped
    }
    render() {
      console.log(`Rendering card with imagePath: ${this.isFlipped ? this.imagePath : 'assets/yugiohCard.jpeg'}`);
    }
    getCard(){
      return this.node
    }  
  // checkFlippedCard(){
  //   for (let card in CARDS){
  //     if (CARDS.isFlipped){
  //       return true
  //     }
  //   }
  //   return false
  // }
}
