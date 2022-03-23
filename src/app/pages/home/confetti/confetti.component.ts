import { AfterViewChecked, Component } from '@angular/core';

type colors = '#FE3464' | '#F8D55B' | '#319CFF' | '#18E098';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.scss'],
})
export class ConfettiComponent implements AfterViewChecked {
  constructor() {}

  ngAfterViewChecked() {
    this.generateConfetti();
  }

  private generateConfetti() {
    let confettisTags: string = '';
    let confettiQuantity = 250;

    for (let i = 0; i < confettiQuantity; i++) {
      let size = this.generateSize();

      confettisTags += `
      <div style="
        position: fixed;
        z-index: 500;
        background-color: ${this.generateColor()};
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        animation: boom ${this.generateSpeed()}s ease-out infinite;
        left: ${this.generateDirection()}vw;
        top: ${this.generateDirection()}vh;
      "></div>
      `;
    }

    document.querySelector('.space-confetti')!.innerHTML = confettisTags;
  }

  private generateColor(): colors {
    let colors: colors[] = ['#FE3464', '#F8D55B', '#319CFF', '#18E098'];

    return colors[Math.round(this.getRandomArbitrary(0, 3))];
  }

  private generateSize(): number {
    return Math.round(this.getRandomArbitrary(9, 13));
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
