import { Node } from './Node.js';
import { Sprite } from './Sprite.js';
import { Label } from './Label.js';
import { Main } from '../Main.js';
export class Card {
    constructor(backCardPath, frontCardPath, index) {
        this.isFlipped = false;
        this.isFlipping = false;
        this.node = new Node(index);
        this.frontFace = new Sprite(frontCardPath);
        this.backFace = new Sprite(backCardPath);
        this.label = new Label(index < 10 ? '0' + index : index.toString());
        this.node.addChild(this.frontFace.getImg());
        this.node.addChild(this.backFace.getImg());
        this.node.addChild(this.label.getLabel());
        this.frontFace.turnOff();
        this.label.turnOn();
        this.node.getNode().addEventListener('click', () => this.flipCard());
    }

    isFlipped() {
        return this.isFlipped;
    }

    getCard() {
        return this.node;
    }
    isFlipping(){
        return this.isFlipping
    }
    flipCard() {
        const duration = 0.5;
        const tl = gsap.timeline({ onComplete: () => (this.isFlipped = !this.isFlipped) });
        if (Main.isFlipping<=2) {
            tl.to([this.label.getLabel(), this.backFace.getImg()], { duration, rotationY: 180, ease: 'power1.inOut' }, 0);
            tl.to(this.frontFace.getImg(), { duration, opacity: 1, rotationY: 360, ease: 'power1.inOut' }, 0);
            tl.to([this.label.getLabel(), this.backFace.getImg()], { duration, opacity: 0, ease: 'power1.inOut' }, 0);
            tl.add(() => {
                this.label.turnOff(); this.backFace.turnOff()
                this.frontFace.turnOn()
            });
            this.isFlipping=true
        }
        // } else {
        //     tl.to(this.frontFace.getImg(), { duration, opacity: 0, rotationY: 180, ease: 'power1.inOut' }, 0);
        //     tl.to([this.label.getLabel(), this.backFace.getImg()], { duration, opacity: 1, rotationY: 360, ease: 'power1.inOut' }, 0);
        //     tl.add(() => {
        //         this.label.turnOn(); this.backFace.turnOn()
        //         this.frontFace.turnOff()
        //     });
        // }
    }
}
