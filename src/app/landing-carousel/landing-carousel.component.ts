import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-landing-carousel',
  standalone: true,
  imports: [
    CarouselModule,
    ImageModule
  ],
  templateUrl: './landing-carousel.component.html',
  styleUrl: './landing-carousel.component.css'
})
export class LandingCarouselComponent {
  products: object[] = [
    {imageSrc:'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg'}
  ];
}
