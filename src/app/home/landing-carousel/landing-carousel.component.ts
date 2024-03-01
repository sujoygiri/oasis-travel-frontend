import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-carousel',
  standalone: true,
  imports: [],
  templateUrl: './landing-carousel.component.html',
  styleUrl: './landing-carousel.component.css'
})
export class LandingCarouselComponent {
  products: object[] = [
    {imageSrc:'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg'}
  ];
}
