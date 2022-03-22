import { Component } from '@angular/core';

type colors = '#FE3464' | '#F8D55B' | '#319CFF' | '#18E098';

interface IConfetti {
  color: colors;
  size: number;
  speed: number;
  direction: {
    width: number;
    height: number;
  };
}

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.scss'],
})
export class ConfettiComponent {
  public confettis: IConfetti[] = [];

  constructor() {
    this.confettis = this.generateConfetti();
  }

  private generateConfetti(): IConfetti[] {
    let confettis: IConfetti[] = [];
    let confettiQuantity = 400;

    for (let i = 0; i < confettiQuantity; i++) {
      confettis.push({
        color: this.generateColor(),
        size: this.generateSize(),
        speed: this.generateSpeed(),
        direction: {
          width: this.generateDirection(),
          height: this.generateDirection(),
        },
      });
    }

    return confettis;
  }

  private generateColor(): colors {
    let colors: colors[] = ['#FE3464', '#F8D55B', '#319CFF', '#18E098'];

    return colors[Math.round(this.getRandomArbitrary(0, 3))];
  }

  private generateSize(): number {
    return Math.round(this.getRandomArbitrary(10, 14));
  }

  private generateSpeed(): number {
    return Math.round(this.getRandomArbitrary(3, 6));
  }

  private generateDirection(): number {
    return Math.round(this.getRandomArbitrary(-10, 120));
  }

  private getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max + min) + min;
  }
}
