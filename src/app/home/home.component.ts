import { Component } from '@angular/core';
import { LandingCarouselComponent } from './landing-carousel/landing-carousel.component';
import { MainSearchbarComponent } from './main-searchbar/main-searchbar.component';
import { FavoritePlaceComponent } from './favorite-place/favorite-place.component';
import { CommitmentComponent } from './commitment/commitment.component';
import { LatestUpdateComponent } from './latest-update/latest-update.component';
import { ConnectComponent } from './connect/connect.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LandingCarouselComponent,
    MainSearchbarComponent,
    CommitmentComponent,
    LatestUpdateComponent,
    FavoritePlaceComponent,
    ConnectComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
