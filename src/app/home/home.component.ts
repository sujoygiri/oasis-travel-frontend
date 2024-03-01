import { Component } from '@angular/core';
import { TitlebarComponent } from '../titlebar/titlebar.component';
import { LandingCarouselComponent } from '../landing-carousel/landing-carousel.component';
import { MainSearchbarComponent } from '../main-searchbar/main-searchbar.component';
import { FavoritePlaceComponent } from '../favorite-place/favorite-place.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TitlebarComponent,
    LandingCarouselComponent,
    MainSearchbarComponent,
    FavoritePlaceComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
